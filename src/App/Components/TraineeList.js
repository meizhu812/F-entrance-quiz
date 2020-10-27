import React from 'react';
import TraineeCard from './TraineeCard';
import './TraineeList.css';
import AddTrainee from './AddTrainee';

export default function TraineeList(props) {
  const { trainees, addTrainee } = props;
  return (
    <div className="trainee-list">
      {trainees?.length > 0 &&
        trainees.map((trainee) => <TraineeCard key={trainee.id} trainee={trainee} />)}
      {addTrainee && <AddTrainee addTrainee={addTrainee} />}
    </div>
  );
}
