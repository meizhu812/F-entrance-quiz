import React from 'react';

export default function TraineeCard(props) {
  const { trainee } = props;
  return <div>{`${trainee.id}. ${trainee.name}`}</div>;
}
