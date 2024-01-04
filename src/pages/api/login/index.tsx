import { generateApiQuery } from '@/lib/api';
// @ts-ignore
import loginQuery from './query.gql';

const login = async (email: string, password: string) => {
  if (!email || !password) {
    return null;
  }
  let token = '';

  try {
    const result: any = await generateApiQuery({
      query: loginQuery,
      variables: { username: email, password: password },
    });
    token = await result?.login?.jwt;
  } catch (e) {
    console.error(e);
    return null;
  }

  return token;
};

export default login;
