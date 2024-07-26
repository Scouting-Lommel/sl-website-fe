'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Modal from '@/components/atoms/Modal';
import ActionTitle from '@/components/molecules/ActionTitle';
import Form from '@/components/organisms/Forms';

type SectionTitleProps = {
  title: string;
  groupId: string;
  type: 'activity' | 'file';
};

const SectionTitle = ({ title, groupId, type }: SectionTitleProps) => {
  const modal = useRef<HTMLDialogElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  const openDropdown = useCallback(() => {
    modal.current?.showModal();
    document.body.setAttribute('style', 'overflow-y: hidden');
  }, [modal]);

  const closeDropdown = useCallback(() => {
    setToggle(false);
    modal.current?.close();
    document.body.removeAttribute('style');
  }, [modal]);

  useEffect(() => {
    const closeKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeDropdown();
      document.removeEventListener('keydown', closeKeyDownHandler);
    };

    const clickHandler = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!modal || !modal.current || !target) {
        return;
      }

      const inner = document.querySelector(`#modal__inner--${type}`);
      if (!inner || !(inner instanceof HTMLElement)) {
        return;
      }

      if (inner.contains(target)) {
        return;
      }

      const rect = inner.getBoundingClientRect();
      if (
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right
      ) {
        return;
      }

      closeDropdown();
      document.removeEventListener('click', clickHandler);
    };

    if (toggle) {
      document.addEventListener('keydown', closeKeyDownHandler);
      document.addEventListener('click', clickHandler);
    }

    return () => {
      document.removeEventListener('keydown', closeKeyDownHandler);
      document.removeEventListener('click', clickHandler);
    };
  });

  const openClickHandler = useCallback(() => {
    setToggle(!toggle);
    openDropdown();
  }, [toggle, openDropdown]);

  const closeClickHandler = useCallback(() => {
    setToggle(false);
    closeDropdown();
  }, [closeDropdown]);

  let actionTitle = '';
  switch (type) {
    case 'activity': {
      actionTitle = 'Nieuwe activiteit toevoegen';
      break;
    }
    case 'file': {
      actionTitle = 'Nieuw bestand toevoegen';
      break;
    }
  }

  return (
    <>
      <ActionTitle
        title={title}
        tagName="h2"
        button={{
          label: actionTitle,
          onClick: openClickHandler,
        }}
      />
      <Modal
        id={`modal__inner--${type}`}
        ref={modal}
        closeModal={closeClickHandler}
        title={actionTitle}
      >
        {type === 'activity' && (
          <Form
            variant="activity"
            props={{ groupId, closeClickHandler }}
            blockProperties={{ slug: 'activity-new', modNoPadding: true }}
          />
        )}
        {type === 'file' && (
          <Form
            variant="uploadFile"
            props={{ groupId }}
            blockProperties={{ slug: 'upload-activity', modNoPadding: true }}
          />
        )}
      </Modal>
    </>
  );
};

export default SectionTitle;