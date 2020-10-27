import { render } from '@testing-library/react';
import React from 'react';
import GroupList from './GroupList';

describe('<GroupList/>', () => {
  it('should render empty list', () => {
    const component = render(<GroupList groups={{}} />);
    expect(component.queryByText(/\d 组/)).toBeNull();
  });
  it('should show all groups', () => {
    const groupA = {
      sequence: 1,
      trainees: [
        {
          id: 1,
          name: 'traineeA',
        },
        {
          id: 2,
          name: 'traineeB',
        },
      ],
    };
    const groupB = {
      sequence: 2,
      trainees: [
        {
          id: 3,
          name: 'traineeC',
        },
        {
          id: 4,
          name: 'traineeD',
        },
      ],
    };
    const component = render(<GroupList groups={[groupA, groupB]} />);
    expect(component.getAllByText(/\d 组/)).toHaveLength(2);
  });
});
