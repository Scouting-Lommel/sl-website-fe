import { createContext, useState } from 'react';
import { FormStatus } from '@/lib/constants/enums/formStatus';

interface FormContextType {
  formStatus: FormStatus;
  setFormStatus: React.Dispatch<React.SetStateAction<FormStatus>>;
  setRemoveStatusAfterTimeout: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContext: FormContextType = {
  formStatus: FormStatus.STATUS_READY,
  setFormStatus: () => {},
  setRemoveStatusAfterTimeout: () => {},
};

const FormContext = createContext<FormContextType>(defaultContext);

type FormProviderProps = { children: React.ReactNode };

const FormProvider = ({ children }: FormProviderProps) => {
  const [formStatus, setFormStatusState] = useState<FormStatus>(FormStatus.STATUS_READY);
  const [removeStatusAfterTimeout, setRemoveStatusAfterTimeout] = useState<boolean>(false);

  const setFormStatus = (data: React.SetStateAction<FormStatus>) => {
    setFormStatusState(data);

    if (
      removeStatusAfterTimeout &&
      (data === FormStatus.STATUS_SUCCESS || data === FormStatus.STATUS_DELETE_SUCCESS)
    ) {
      setTimeout(() => {
        setFormStatusState(FormStatus.STATUS_READY);
      }, 5000);
    }
  };

  return (
    <FormContext.Provider value={{ formStatus, setFormStatus, setRemoveStatusAfterTimeout }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
