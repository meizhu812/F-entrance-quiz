import { render } from '@testing-library/react';
import React from 'react';
import TraineeList from './TraineeList';

describe('<TraineeList/>', () => {
  it('should show all trainees', () => {
    const traineeA = {
      id: 1,
      name: 'traineeA',
    };
    const traineeB = {
      id: 2,
      name: 'traineeB',
    };
    const nameCard = render(<TraineeList trainees={[traineeA, traineeB]} />);
    expect(nameCard.getAllByText(/\d\..+/)).toHaveLength(2);
  });
});
