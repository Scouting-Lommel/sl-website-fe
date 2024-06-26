'use client';

import { FormProvider } from '@/lib/contexts/FormContext';
import BlockContainer from '@/components/atoms/BlockContainer';
import Contact from './Contact';
import Register from './Register';
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
    default: {
      console.warn(`There's no form defined for this variant: ${variant}`);
      break;
    }
  }

  return (
    <BlockContainer slug={blockProperties.slug}>
      <section className="sl-layout">
        <FormProvider>{FormComponent}</FormProvider>
      </section>
    </BlockContainer>
  );
};

export default Form;
