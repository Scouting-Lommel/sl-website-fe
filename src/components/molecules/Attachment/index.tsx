import Link from './components/Link';
import File from './components/File';
import { Attachment as AttachmentProps } from './types';

type Props = AttachmentProps & React.HTMLAttributes<HTMLElement>;

const Attachment = (props: Props) => {
  switch (props.variant) {
    case 'link': {
      return (
        <Link
          {...props.link}
          groupId={props.groupId}
          allLinks={props.allLinks}
          deleteCallback={props.deleteCallback}
          modDeleteable={props.modDeleteable}
        />
      );
    }

    case 'file': {
      return (
        <File
          {...props.file}
          deleteCallback={props.deleteCallback}
          modDeleteable={props.modDeleteable}
        />
      );
    }

    default: {
      console.warn('No component found for this variant');
      break;
    }
  }
};

export default Attachment;
