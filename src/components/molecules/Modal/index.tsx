import { Modal as ModalProps } from './types';
import styles from './Modal.css';
import { useEffect, useState } from 'react';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ModalProps & React.HTMLAttributes<HTMLElement>;

const Modal = ({ button, modalData }: Props) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const modalHTML = document.getElementById('modal__container');
    if (modalHTML) {
      document.body.appendChild(modalHTML);
    }
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        {button}
      </div>
      <div id="modal__container">
        {isOpen && (
          <div className="modal__container">
            <div className="modal__content">
              <span
                className="close"
                onClick={() => {
                  setOpen(false);
                }}
              >
                &times;
              </span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
