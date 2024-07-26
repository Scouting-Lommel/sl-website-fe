import { forwardRef } from 'react';
import { IconClose } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import { Modal as ModalProps } from './types';
import styles from './Modal.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ModalProps & React.HTMLAttributes<HTMLElement>;

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ id, title, closeModal, children }: Props, ref) => {
    return (
      <dialog className="modal" ref={ref} role="none">
        <div id={id} className="modal__inner">
          <div className="modal__header">
            <button
              className="modal__header__close-button"
              type="button"
              aria-label="Venster sluiten"
              onClick={closeModal}
            >
              <Icon icon={IconClose} title="Close" size={'lg'} />
            </button>
            <div className="t-headline-3 modal__header__title">{title}</div>
          </div>
          <div className="modal__content">{children}</div>
        </div>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
