'use client';

import Modal from '@/components/atoms/Modal';
import ActionTitle from '@/components/molecules/ActionTitle';
import Form from '@/components/organisms/Forms';
import { useRef } from 'react';

type SectionTitleProps = {
  title: string;
  groupId: string;
  type: 'activity' | 'file';
};

const SectionTitle = ({ title, groupId, type }: SectionTitleProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <ActionTitle
        title={title}
        tagName="h2"
        button={{
          label: 'Nieuwe activiteit',
          onClick: handleOpenModal,
        }}
      />
      <Modal ref={modalRef} closeModal={handleCloseModal} title="Nieuwe activiteit">
        <Form
          variant="activity"
          props={{ groupId, handleCloseModal }}
          blockProperties={{ slug: 'activity-new', modNoPadding: true }}
        />
      </Modal>
    </>
  );
};

export default SectionTitle;
