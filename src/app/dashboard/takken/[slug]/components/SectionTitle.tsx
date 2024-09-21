'use client';

import { useState } from 'react';
import Modal from '@/components/atoms/Modal';
import ActionTitle from '@/components/molecules/ActionTitle';
import Tabs, { Tab } from '@/components/atoms/Tabs';
import Form from '@/components/organisms/Forms';

type SectionTitleProps = {
  title: string;
  groupId: string;
  type: 'activity' | 'file';
  allFiles?: any;
  allLinks?: any;
  callback: any;
};

const SectionTitle = ({
  title,
  groupId,
  allFiles,
  allLinks,
  type,
  callback,
}: SectionTitleProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  let actionTitle = '';
  switch (type) {
    case 'activity': {
      actionTitle = 'Nieuwe activiteit toevoegen';
      break;
    }
    case 'file': {
      actionTitle = 'Nieuwe bijlage toevoegen';
      break;
    }
  }

  const handleClose = () => {
    document.body.removeAttribute('style');
    setToggle(false);
  };

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

      {toggle && (
        <Modal
          id={`modal__inner--${type}`}
          open={toggle}
          handleCloseModal={handleClose}
          title={actionTitle}
        >
          {type === 'activity' && (
            <Form
              variant="activity"
              props={{
                groupId,
                callback,
                closeClickHandler: handleClose,
              }}
              blockProperties={{ slug: 'activity-new', modNoPadding: true }}
            />
          )}
          {type === 'file' && (
            <Tabs>
              <Tab label="Een bestand toevoegen">
                <Form
                  variant="uploadFile"
                  props={{ groupId, callback, allFiles, closeClickHandler: handleClose }}
                  blockProperties={{ slug: 'upload-file', modNoPadding: true }}
                />
              </Tab>
              <Tab label="Een link toevoegen">
                <Form
                  variant="uploadLink"
                  props={{ groupId, allLinks, callback, closeClickHandler: handleClose }}
                  blockProperties={{ slug: 'upload-link', modNoPadding: true }}
                />
              </Tab>
            </Tabs>
          )}
        </Modal>
      )}
    </>
  );
};

export default SectionTitle;
