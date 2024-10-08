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
  comments,
  workingYear,
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
  comments: string;
  workingYear: string;
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
      comments,
      workingYear,
    },
    query: REGISTER_MEMBER_MUTATION,
    operation: 'mutation',
  });
}
