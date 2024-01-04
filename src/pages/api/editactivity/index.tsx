import { NextApiRequest, NextApiResponse } from 'next';
import { generateApiQuery } from '@/lib/api';
import editActivityQuery from './query.gql';

const editActivity = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  if (
    !body.name ||
    !body.startdate ||
    !body.starttime ||
    !body.enddate ||
    !body.endtime ||
    !body.description ||
    !body.id ||
    !body.jwt
  ) {
    return res.status(400).json({
      message: 'Not all required data given',
    });
  }

  try {
    const result: any = await generateApiQuery({
      query: editActivityQuery,
      variables: body,
      token: body.jwt,
    });
  } catch (e) {
    return res.status(400).json({ data: 'Onjuiste query: ' + e });
  }

  return res.status(200).json({
    message: 'succesfull creation',
  });
};

export default editActivity;
