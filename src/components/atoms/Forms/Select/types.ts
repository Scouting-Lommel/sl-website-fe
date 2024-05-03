export type SelectOption = {
  label: string;
  value: string;
};

export type FormSelect = {
  label: string;
  id: string;
  name: string;
  options: SelectOption[];
  customChangeBehaviour?: any;
  error?: any;
};
