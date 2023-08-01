'use client';

import { Form as FormProps } from './types';
import Input from '@/components/molecules/Input';
import styles from './Form.css';
import { useState } from 'react';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormProps & React.HTMLAttributes<HTMLElement>;

const Form = ({ redirect, action, inputs, formattedResponseMessage }: Props) => {
  const [currState, setState] = useState('form'); // form | result
  let [formattedMessage, setFormattedMessage] = useState(formattedResponseMessage); // the formatted message

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form
    let data: Record<string, string | number | string[]> = {
      formattedResponseMessage: formattedResponseMessage,
    };
    // add all input data to the data variable
    let uidList: string[] = [];
    inputs.forEach((input) => {
      data[input.uid] = event.target[input.uid].value;
      uidList.push(input.uid);
    });

    data['uidList'] = uidList;

    // Send the data to the nextjs server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api' + action;

    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.status != 200) {
      alert(
        'something went wrong trying to resolve the request:\n Status code:' +
          response.status +
          '\n Error message: ' +
          result.data,
      );
      return;
    }

    // format the formattedResponseMessage with the data: TODO
    let tmp = formattedMessage;
    inputs.forEach((input) => {
      tmp = tmp.replace('${' + input.uid + '}', event.target[input.uid].value);
    });
    setFormattedMessage(tmp);

    // set the state to show the result
    setState('result');
  };

  return (
    <>
      {currState === 'form' && (
        <form onSubmit={(event) => handleSubmit(event)} className="form" noValidate={false}>
          {inputs.map((input, key) => {
            return <Input key={key} redirect={redirect} {...input} />;
          })}
        </form>
      )}
      {currState === 'result' && <div className="form">{formattedMessage}</div>}
    </>
  );
};

export default Form;
