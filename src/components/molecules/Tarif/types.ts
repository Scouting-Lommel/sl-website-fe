export type Tarif = {
  name: string;
  example: string;
  minimumPrice: number;
  dayPrice: number;
} & React.HTMLAttributes<HTMLElement>;
