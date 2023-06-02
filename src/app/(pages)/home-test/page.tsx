import { getHomePage } from './api';

const TestPage = async () => {
  const data = await getHomePage();

  console.log(data);

  return <>test page</>;
};

export default TestPage;
