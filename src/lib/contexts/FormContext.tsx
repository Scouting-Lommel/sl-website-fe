import { createContext, useState } from 'react';
import { FormStatus } from '@/lib/constants/enums/formStatus';

interface FormContextType {
  formStatus: FormStatus;
  setFormStatus: React.Dispatch<React.SetStateAction<FormStatus>>;
}

const defaultContext: FormContextType = {
  formStatus: FormStatus.STATUS_READY,
  setFormStatus: () => {},
};

const FormContext = createContext<FormContextType>(defaultContext);

type FormProviderProps = { children: React.ReactNode };

const FormProvider = ({ children }: FormProviderProps) => {
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.STATUS_READY);

  return (
    <FormContext.Provider value={{ formStatus, setFormStatus }}>{children}</FormContext.Provider>
  );
};

export { FormContext, FormProvider };
