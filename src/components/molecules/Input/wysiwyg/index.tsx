'use client';

import { WYSIWYGInput as InputProps } from './types';
import styles from './wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import QuillNoSSRWrapper from 'react-quill';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const textInput = ({ label, type, uid, required, ...options }: Props) => {
  return (
    <>
      <label htmlFor={uid} className="WYSIWYGLabel">
        {label}
        <input type="hidden" id={uid} required={required} />
        <QuillNoSSRWrapper
          id="QuilNoSSRWrapper"
          className="WYSIWYGInput"
          theme="snow"
          onChange={(content) => {
            (document.getElementById(uid) as HTMLInputElement).value = content;
          }}
        />
      </label>
    </>
  );
};

export default textInput;
