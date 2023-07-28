import { ButtonInput } from './button/types';
import { CheckboxInput } from './checkbox/types';
import { ColorInput } from './color/types';
import { DateInput } from './date/types';
import { DateTimeInput } from './datetime-local/types';
import { EmailInput } from './email/types';
import { FileInput } from './file/types';
import { MonthInput } from './month/types';
import { NumberInput } from './number/types';
import { PasswordInput } from './password/types';
import { RadioInput } from './radio/types';
import { RangeInput } from './range/types';
import { SubmitInput } from './submit/types';
import { TelInput } from './tel/types';
import { TextInput } from './text/types';
import { TimeInput } from './time/types';
import { WYSIWYGInput } from './wysiwyg/types';

export type Input =
  | ButtonInput
  | CheckboxInput
  | ColorInput
  | DateInput
  | DateTimeInput
  | EmailInput
  | FileInput
  | MonthInput
  | NumberInput
  | PasswordInput
  | RadioInput
  | RangeInput
  | SubmitInput
  | TelInput
  | TextInput
  | TimeInput
  | WYSIWYGInput;
