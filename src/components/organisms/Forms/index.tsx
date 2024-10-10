'use client';

import { FormProvider } from '@/lib/contexts/FormContext';
import BlockContainer from '@/components/atoms/BlockContainer';
import Contact from './Contact';
import Register from './Register';
import Activity from './Activity';
import UploadFile from './UploadFile';
import UploadLink from './UploadLink';
import Eetfestijn from './Eetfestijn';
import { Form as FormProps } from './types';

const Form = ({ variant, props, blockProperties }: FormProps) => {
  let FormComponent = null;

  switch (variant) {
    case 'contact': {
      FormComponent = <Contact {...props} />;
      break;
    }
    case 'register': {
      FormComponent = <Register {...props} />;
      break;
    }
    case 'activity': {
      FormComponent = <Activity {...props} />;
      break;
    }
    case 'uploadFile': {
      FormComponent = <UploadFile {...props} />;
      break;
    }
    case 'uploadLink': {
      FormComponent = <UploadLink {...props} />;
      break;
    }
    case 'eetfestijn': {
      FormComponent = <Eetfestijn {...props} />;
      break;
    }
    default: {
      console.warn(`There's no form defined for this variant: ${variant}`);
      break;
    }
  }

  return (
    <BlockContainer {...blockProperties}>
      <div className="sl-layout">
        <FormProvider>{FormComponent}</FormProvider>
      </div>
    </BlockContainer>
  );
};

export default Form;
