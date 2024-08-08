export type Modal = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
