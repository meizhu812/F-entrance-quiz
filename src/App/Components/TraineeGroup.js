import React from 'react';
import TraineeList from './TraineeList';
import './TraineeGroup.css';

export default function TraineeGroup(props) {
  const { sequence, trainees } = props.group;
  return (
    <div className="group-box">
      {/* TODO GTB-3: - 使用h*或span标签 */}
      <p className="group-title">{`${sequence} 组`}</p>
      <TraineeList trainees={trainees} />
    </div>
  );
}
