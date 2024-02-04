const localStorageService = {
  // get an item from localStorage
  get: (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  // set an item in localStorage
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  // remove an item from localStorage
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default localStorageService;
