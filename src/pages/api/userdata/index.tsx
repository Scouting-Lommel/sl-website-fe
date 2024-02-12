import { generateApiQuery } from '@/lib/api';
// @ts-ignore
import infoQuery from './query.gql';

const userdata = async (uid: string) => {
  if (!uid) {
    return null;
  }
  let tak = '';

  try {
    const inforesult: any = await generateApiQuery({
      query: infoQuery,
      variables: { UID: uid },
    });
    tak = await inforesult?.leaders?.data[0]?.attributes?.group?.data?.attributes?.slug;
  } catch (e) {
    console.error(e);
    return null;
  }

  return {"tak": tak};
};

export default userdata;
