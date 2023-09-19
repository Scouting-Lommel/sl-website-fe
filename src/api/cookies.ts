import { deleteCookie, setCookie } from 'cookies-next';
import router from 'next/router';

// adding cookies
const addCookie = () => {
  setCookie('user', true, {
    path: '/',
  });
  router.replace('/');
};

// removing cookies
const removeCookie = () => {
  deleteCookie('user', {
    path: '/',
  });
  router.replace('/');
};

export { addCookie, removeCookie };
