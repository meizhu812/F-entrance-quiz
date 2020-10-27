import './App.scss';
import React, { useEffect, useState } from 'react';
import TraineeList from './Components/TraineeList';
import GroupList from './Components/GroupList';
import { getLocalStorage, setLocalStorage } from './utils/localstorage';
import shuffle from './utils/shuffle';
import AddTrainee from './Components/AddTrainee';

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
  return (
    <div data-testid="app" className="App">
      <section>
        <p>分组列表</p>
        <GroupList groups={groups} />
        <button
          type="button"
          onClick={() => {
            const newGroups = shuffle(trainees);
            setLocalStorage('groups', newGroups);
            setGroups(newGroups);
          }}
        >
          分组学员
        </button>
      </section>
      <section>
        <p>学员列表</p>
        <TraineeList trainees={trainees} />
        <AddTrainee addTrainee={addTrainee} />
      </section>
    </div>
  );
}
