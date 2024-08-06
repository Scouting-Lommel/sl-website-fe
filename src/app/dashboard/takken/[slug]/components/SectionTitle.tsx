'use client';

import { useState } from 'react';
import Modal from '@/components/atoms/Modal';
import ActionTitle from '@/components/molecules/ActionTitle';
import Form from '@/components/organisms/Forms';

type SectionTitleProps = {
  title: string;
  groupId: string;
  type: 'activity' | 'file';
  allFiles: any;
  callback: any;
};

const SectionTitle = ({ title, groupId, allFiles, type, callback }: SectionTitleProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

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
          onClick: () => setToggle(true),
        }}
      />
      <Modal
        id={`modal__inner--${type}`}
        open={toggle}
        setOpen={(data: boolean) => setToggle(data)}
        title={actionTitle}
      >
        {type === 'activity' && (
          <Form
            variant="activity"
            props={{
              groupId,
              callback,
              closeClickHandler: () => {
                setToggle(false);
              },
            }}
            blockProperties={{ slug: 'activity-new', modNoPadding: true }}
          />
        )}
        {type === 'file' && (
          <Form
            variant="uploadFile"
            props={{ groupId, callback, allFiles, closeClickHandler: () => setToggle(false) }}
            blockProperties={{ slug: 'upload-activity', modNoPadding: true }}
          />
        )}
      </Modal>
    </>
  );
};

export default SectionTitle;
