import React from 'react';
import TraineeList from './TraineeList';
import './TraineeGroup.css';

export default function TraineeGroup(props) {
  const { sequence, trainees } = props.group;
  return (
    <div className="group-box">
      <p className="group-title">{`${sequence} 组`}</p>
      <TraineeList trainees={trainees} />
    </div>
  );
}
