import { Modal as ModalProps } from './types';
import styles from './Modal.css';
import { useEffect, useState } from 'react';
import Icon from '@/components/atoms/Icon';
import { IconClose } from '@/assets/icons';
import classNames from 'classnames';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ModalProps & React.HTMLAttributes<HTMLElement>;

const Modal = ({ button, modalData, cardClass, className }: Props) => {
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
            <div className={classNames('modal__content', cardClass)}>
              <Icon
                icon={IconClose}
                size="lg"
                title="modal_close"
                className="modal__close"
                onClick={() => {
                  setOpen(false);
                }}
              />
              <div className={classNames('modal__body', className)}>{modalData}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
