import shuffle from './shuffle';

describe('shuffle algo', () => {
  it('should shuffle to evenly groups', () => {
    const trainees = [...Array(12).keys()].map((id) => ({
      id,
      name: `trainee${id}`,
    }));
    const groups = shuffle(trainees);
    expect(groups).toHaveLength(6);
    groups.forEach((group) => expect(group.trainees).toHaveLength(2));
  });
  it('should shuffle to unevenly groups', () => {
    const trainees = [...Array(14).keys()].map((id) => ({
      id,
      name: `trainee${id}`,
    }));
    const groups = shuffle(trainees);
    expect(groups).toHaveLength(6);
    groups.forEach((group, index) => {
      const count = index < 2 ? 3 : 2;
      expect(group.trainees).toHaveLength(count);
    });
  });
});
