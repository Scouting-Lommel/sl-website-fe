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
      return <>Geen component voor deze variant gevonden.</>;
    }
  }
};

export default Attachment;
