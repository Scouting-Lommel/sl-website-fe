import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateApiQuery } from '@/lib/api';
import loginQuery from './query.gql';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  if (!body.username || !body.password) {
    return res.status(400).json({
      authorize: false,
    });
  }

  let token = '';

  try {
    const result: any = await generateApiQuery({ query: loginQuery, variables: body });
    token = await result?.jwt;
  } catch (e) {
    return res.status(400).json({ data: 'An error occured whilst trying to log in: ' + e });
  }

  setCookie('leader', token, {
    path: '/',
  });
  return res.status(200).json({
    authorize: true,
  });
};

export default login;
