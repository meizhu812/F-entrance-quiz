import { getLocalStorage, setLocalStorage } from './localstorage';
import shuffle from './shuffle';

export default {
  getGroups: () => {
    return getLocalStorage('groups');
  },
  regroup: () => {
    const trainees = getLocalStorage('trainees');
    setLocalStorage('groups', shuffle(trainees));
  },
};
