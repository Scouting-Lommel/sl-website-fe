import { generateApiQuery } from '@/lib/api';
import { REGISTER_MEMBER_MUTATION } from './mutations';

export function registerMember({
  firstName,
  lastName,
  birthday,
  address,
  postCode,
  locality,
  telephoneNumber,
  email,
  isAkabe,
  gender,
}: {
  firstName: string;
  lastName: string;
  birthday: Date;
  address: string;
  postCode: string;
  locality: string;
  telephoneNumber: string;
  email: string;
  isAkabe: boolean;
  gender: 'm' | 'v' | 'x';
}): Promise<any> {
  return generateApiQuery({
    variables: {
      firstName,
      lastName,
      birthday,
      address,
      postCode,
      locality,
      telephoneNumber,
      email,
      isAkabe,
      gender,
    },
    query: REGISTER_MEMBER_MUTATION,
    operation: 'mutation',
  });
}
