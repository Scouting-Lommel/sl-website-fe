export type RegisterForm = {
  initialValues: Object;
  submitForm: any;
} & React.HTMLAttributes<HTMLElement>;

export type RegisterConfirmation = {
  firstName: string;
  lastName: string;
  price: number;
  bankAccountNumber: string;
} & React.HTMLAttributes<HTMLElement>;
