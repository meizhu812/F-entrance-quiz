import React from 'react';
import './TraineeCard.css';

export default function TraineeCard(props) {
  const { trainee } = props;
  return <div className="trainee-card">{`${trainee.id}. ${trainee.name}`}</div>;
}
