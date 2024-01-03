import { NextApiRequest, NextApiResponse } from 'next';
import { generateApiQuery } from '@/lib/api';
import creatActivityQuery from './query.gql';

const creatActivity = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  if (!body.name || !body.startdate || !body.starttime || !body.enddate || !body.endtime || !body.description || !body.group || !body.jwt) {
    return res.status(400).json({
      message: 'Not all required data given',
    });
  }
  console.log(body)
  try {
    const result: any = await generateApiQuery({ query: creatActivityQuery, variables: body, token: body.jwt });
  } catch (e) {
    return res.status(400).json({ data: 'Onjuiste query: ' + e });
  }

  return res.status(200).json({
    message: 'succesfull creation',
  });
};

export default creatActivity;