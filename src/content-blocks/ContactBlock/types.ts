import { Contact } from '@/components/organisms/Contact/types';
import { BlockContainer } from '@/components/atoms/BlockContainer/types';

export type ContactBlock = Contact & { blockProperties: BlockContainer };
