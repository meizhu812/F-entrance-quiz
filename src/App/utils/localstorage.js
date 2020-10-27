const PREFIX = 'GTB';

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(`${PREFIX}_${key}`, JSON.stringify(value));
};

export function getLocalStorage(key) {
  const value = window.localStorage.getItem(`${PREFIX}_${key}`);

  try {
    return JSON.parse(value) || {};
  } catch (err) {
    console.error(err);
    return {};
  }
}

export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(`${PREFIX}_${key}`);
};