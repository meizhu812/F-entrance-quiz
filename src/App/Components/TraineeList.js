import React from 'react';
import TraineeCard from './TraineeCard';
import './TraineeList.css';
import AddTrainee from './AddTrainee';

export default function TraineeList(props) {
  const { trainees, handleAddTrainee } = props;
  return (
    <div className="trainee-list">
      {trainees?.length > 0 &&
        trainees.map((trainee) => <TraineeCard key={trainee.id} trainee={trainee} />)}
      {handleAddTrainee && <AddTrainee handleAddTrainee={handleAddTrainee} />}
    </div>
  );
}
