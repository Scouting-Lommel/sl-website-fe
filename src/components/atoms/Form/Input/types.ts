export type Input = {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'number' | 'password' | 'email' | 'url';
  value: string | number;
  placeholder: string;
};
