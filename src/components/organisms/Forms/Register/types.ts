export type RegisterForm = {
  initialValues: Object;
  submitForm: any;
} & React.HTMLAttributes<HTMLElement>;

export type RegisterConfirmation = {
  price: number;
  bankAccountNumber: string;
} & React.HTMLAttributes<HTMLElement>;
