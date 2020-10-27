import React from 'react';
import TraineeGroup from './TraineeGroup';

export default function GroupList(props) {
  const { groups } = props;
  return (
    <div>
      {groups.map((group) => (
        <TraineeGroup key={group.sequence} group={group} />
      ))}
    </div>
  );
}
