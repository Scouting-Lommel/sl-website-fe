import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

const AuthCheck = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (session) {
    redirect('/auth/logout');
  } else {
    redirect('/auth/login');
  }
};

export default AuthCheck;
