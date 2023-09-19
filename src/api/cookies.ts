// adding cookies
const addCookie = (key: string, value: string) => {
  cookies().set({ name: key, value: value });
  console.log(value);
  console.log(hasCookie(key));
};

// // removing cookies
// const removeCookie = (key: string) => {
//   deleteCookie(key, {
//     path: '/',
//   });
// };

const hasCookie = (key: string) => {
  console.log(cookies().get(key));
  return cookies().has(key);
};

export { addCookie, hasCookie };
