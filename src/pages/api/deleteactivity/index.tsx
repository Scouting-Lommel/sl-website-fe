import { NextApiRequest, NextApiResponse } from 'next';
import { generateApiQuery } from '@/lib/api';
import deleteActivityQuery from './query.gql';

const deleteActivity = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  if (!body.id || !body.jwt) {
    return res.status(400).json({
      message: 'Not all required data given',
    });
  }

  try {
    const result: any = await generateApiQuery({ query: deleteActivityQuery, variables: body, token: body.jwt });
  } catch (e) {
    return res.status(400).json({ data: 'Onjuiste query: ' + e });
  }

  return res.status(200).json({
    message: 'succesfull deletion',
  });
};

export default deleteActivity;