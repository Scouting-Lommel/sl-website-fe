import Cookies from 'js-cookie';

// adding cookies
const addCookie = (key: string, value: string) => {
  Cookies.set(key, value);
  console.log(value);
  console.log(hasCookie(key));
};

// removing cookies
const removeCookie = (key: string) => {
  Cookies.remove(key);
};

// check if the cookie exists
const hasCookie = (key: string) => {
  // console.log(Cookies.get(key));
  return Cookies.get(key) !== undefined;
};

export { addCookie, hasCookie, removeCookie };
