export type FormTextArea = {
  label: string;
  id: string;
  name: string;
  error?: any;
} & React.TextareaHTMLAttributes<HTMLElement>;
