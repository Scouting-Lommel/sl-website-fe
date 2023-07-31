import { Input } from '@/components/molecules/Input/types';

export type Form = {
  redirect: string;
  action: string;
  formattedResponseMessage: string;
  inputs: Input[];
};
