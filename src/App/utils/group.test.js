import GroupApi from './group';
import { getLocalStorage, setLocalStorage } from './localstorage';

jest.mock('./localstorage.js');

describe('group utils', () => {
  it('should get all groups from ls', () => {
    GroupApi.getGroups();
    expect(getLocalStorage).toHaveBeenCalledWith('groups');
  });
  it('should get all trainees and regroup', () => {
    const trainees = [...Array(10).keys()].map((id) => ({
      id,
      name: `trainee${id}`,
    }));
    getLocalStorage.mockReturnValue(trainees);
    GroupApi.regroup();
    expect(getLocalStorage).toHaveBeenCalledWith('trainees');
    expect(setLocalStorage.mock.calls[0][0]).toBe('groups');
    expect(setLocalStorage.mock.calls[0][1]).toHaveLength(6);
  });
});
