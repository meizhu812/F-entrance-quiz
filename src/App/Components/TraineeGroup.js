import React from 'react';
import TraineeList from './TraineeList';

export default function TraineeGroup(props) {
  const { sequence, trainees } = props.group;
  return (
    <div>
      <p>{`${sequence} 组`}</p>
      <TraineeList trainees={trainees} />
    </div>
  );
}
