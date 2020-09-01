export const setToStorage = (name, info) => {
  localStorage.setItem(name, info);
}

export const getFromStorage = name => {
  return localStorage.getItem(name);
}

export function getDate() {
  let dateNow = new Date();
  return `${padStr(dateNow.getDay())}-${padStr(dateNow.getMonth())}-${dateNow.getFullYear()}`;
}

export function generateId(prefix) {
  return `${prefix}-${(~~(Math.random()*1e8)).toString(16)}`
}

function padStr(i) {
  return (i < 10) ? ('0' + i) : ('' + i);
}