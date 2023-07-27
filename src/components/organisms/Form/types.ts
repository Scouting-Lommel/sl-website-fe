import { Input } from '@/components/molecules/Input/types';

export type Form = {
    redirect: string;
    action: string;
    inputs: Input[];
}