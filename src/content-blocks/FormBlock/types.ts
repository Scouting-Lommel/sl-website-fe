import { Input } from '@/components/molecules/Input/types';

export type FormBlock = {
    redirect: string;
    action: string;
    inputs: Input[];
}