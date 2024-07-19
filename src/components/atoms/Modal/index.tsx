import { forwardRef } from 'react';
import { Modal as ModalProps } from './types';
import styles from './Modal.css';
import Icon from '@/components/atoms/Icon';
import { IconClose } from '@/assets/icons';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ModalProps & React.HTMLAttributes<HTMLElement>;

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ title, closeModal, children }: Props, ref) => {
    return (
      <dialog className="modal" ref={ref} role="none">
        <div className="modal__header">
          <button
            className="modal__header__close-button"
            type="button"
            aria-label="Venster sluiten"
            onClick={closeModal}
          >
            <Icon icon={IconClose} title="Close" size={'lg'} />
          </button>
          <div className="t-headline-3">{title}</div>
        </div>
        <div className="modal__content">{children}</div>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
