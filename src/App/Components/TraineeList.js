import React from 'react';
import TraineeCard from './TraineeCard';

export default function TraineeList(props) {
  const { trainees } = props;
  return (
    <div>
      {trainees.map((trainee) => (
        <TraineeCard key={trainee.id} trainee={trainee} />
      ))}
    </div>
  );
}
