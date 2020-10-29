const PREFIX = 'GTB';

// TODO GTB-4: - 随机分组放后端，前端localStorage不是真正的数据持久化
export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(`${PREFIX}_${key}`, JSON.stringify(value));
};

export function getLocalStorage(key) {
  const value = window.localStorage.getItem(`${PREFIX}_${key}`);

  try {
    return JSON.parse(value) || {};
  } catch (err) {
    return {};
  }
}
