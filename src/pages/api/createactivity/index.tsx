import { NextApiRequest, NextApiResponse } from 'next';
import { generateApiQuery } from '@/lib/api';
import loginQuery from './query.gql';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  if (!body.name || !body.startdate || !body.enddate || !body.description) {
    return res.status(400).json({
      message: 'Not all required data given',
    });
  }

  try {
    const result: any = await generateApiQuery({ query: loginQuery, variables: body });
  } catch (e) {
    return res.status(400).json({ data: 'Onjuiste gebruikersnaam of wachtwoord' });
  }

  return res.status(200).json({
    message: 'succesfull creation',
  });
};

export default login;