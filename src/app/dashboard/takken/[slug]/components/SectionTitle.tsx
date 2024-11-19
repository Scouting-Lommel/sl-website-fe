'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
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

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  groupId,
  allFiles,
  allLinks,
  type,
  callback,
}): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  const t = useTranslations('dashboard.groupsDetail.sections.sectionTitle');

  let actionTitle = '';
  switch (type) {
    case 'activity': {
      actionTitle = t('activity.actionTitle');
      break;
    }
    case 'file': {
      actionTitle = t('file.actionTitle');
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
              <Tab label={t('file.tabTitles.file')}>
                <Form
                  variant="uploadFile"
                  props={{ groupId, callback, allFiles, closeClickHandler: handleClose }}
                  blockProperties={{ slug: 'upload-file', modNoPadding: true }}
                />
              </Tab>
              <Tab label={t('file.tabTitles.link')}>
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
