import { render } from '@testing-library/react';
import React from 'react';
import TraineeCard from './TraineeCard';

describe('<TraineeCard/>', () => {
  it('should render formatted name', () => {
    const trainee = {
      id: 'someId',
      name: 'someName',
    };
    const nameCard = render(<TraineeCard trainee={trainee} />);
    expect(nameCard.getByText('someId. someName')).toBeInTheDocument();
  });
});
