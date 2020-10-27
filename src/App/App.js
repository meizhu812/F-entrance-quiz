import React, { useEffect, useState } from 'react';
import TraineeList from './Components/TraineeList';
import GroupList from './Components/GroupList';
import { getLocalStorage, setLocalStorage } from './utils/localstorage';
import shuffle from './utils/shuffle';
import './App.css';

export default function App() {
  const [trainees, setTrainees] = useState(getLocalStorage('trainees'));
  const [groups, setGroups] = useState(getLocalStorage('groups'));
  const addTrainee = (trainee) => {
    fetch('http://localhost:8080/trainees', {
      method: 'POST',
      body: trainee,
    })
      .then((response) => response.json())
      .then((data) => {
        setLocalStorage('trainees', data);
        setTrainees(data);
      });
  };
  useEffect(() => {
    fetch('http://localhost:8080/trainees')
      .then((response) => response.json())
      .then((data) => {
        setLocalStorage('trainees', data);
        setTrainees(data);
      });
  }, [trainees?.length]);
  const handleShuffle = () => {
    const newGroups = shuffle(trainees);
    setLocalStorage('groups', newGroups);
    setGroups(newGroups);
  };
  return (
    <div data-testid="app" className="app">
      <section>
        <div className="group-header">
          <p className="section-title">分组列表</p>
          <button className="shuffle-button" type="button" onClick={handleShuffle}>
            分组学员
          </button>
        </div>
        <GroupList groups={groups} />
      </section>
      <section>
        <p className="section-title">学员列表</p>
        <TraineeList trainees={trainees} addTrainee={addTrainee} />
      </section>
    </div>
  );
}
