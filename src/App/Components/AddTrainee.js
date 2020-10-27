import React, { useState } from 'react';

export default function AddTrainee(props) {
  const [status, setStatus] = useState('OFF');
  const { addTrainee } = props;

  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      addTrainee(event.target.value);
      setStatus('OFF');
    }
  };

  return status === 'OFF' ? (
    <button type="button" onClick={() => setStatus('ON')}>
      + 添加学员
    </button>
  ) : (
    <input type="text" onKeyUp={handleKeyUp} />
  );
}
