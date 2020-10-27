import { render } from '@testing-library/react';
import React from 'react';
import TraineeGroup from './TraineeGroup';

describe('<TraineeGroup/>', () => {
  it('should show group title and group trainees', () => {
    const traineeA = {
      id: 1,
      name: 'traineeA',
    };
    const traineeB = {
      id: 2,
      name: 'traineeB',
    };
    const group = {
      sequence: 1,
      trainees: [traineeA, traineeB],
    };
    const component = render(<TraineeGroup group={group} />);
    expect(component.getByText('1 组')).toBeInTheDocument();
    expect(component.getAllByText(/\d\..+/)).toHaveLength(2);
  });
});
