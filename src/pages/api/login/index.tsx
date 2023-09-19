import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import { generateApiQuery } from '@/lib/api';
import loginQuery from './query.gql';
import { addCookie } from '@/api/cookies';

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
    token = await result?.login?.jwt;
  } catch (e) {
    return res.status(400).json({ data: 'Onjuiste gebruikersnaam of wachtwoord' });
  }

  addCookie('leader', token);

  return res.status(200).json({
    authorize: true,
  });
};

export default login;
