import React, { useState } from 'react';
import './AddTrainee.css';

export default function AddTrainee(props) {
  // TODO GTB-4: - 这里status，'OFF', 'ON'（magic number） 是否可以采用更能体现业务场景的命名？
  const [status, setStatus] = useState('OFF');
  const { handleAddTrainee } = props;

  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      handleAddTrainee(event.target.value);
      setStatus('OFF');
    }
  };

  return status === 'OFF' ? (
    <button className="add-button" type="button" onClick={() => setStatus('ON')}>
      + 添加学员
    </button>
  ) : (
    <input className="add-input" type="text" onKeyUp={handleKeyUp} />
  );
}
