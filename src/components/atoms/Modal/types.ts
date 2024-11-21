export type Modal = {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  handleCloseModal: () => void;
} & React.HTMLAttributes<HTMLElement>;
