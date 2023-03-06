import Link from 'next/link';

const File = ({ file }) => {
  let fileType = '';
  switch (file.ext) {
    case '.docx':
      fileType = 'fa-file-word';
      break;
    case '.pdf':
      fileType = 'fa-file-pdf';
      break;
    case '.pptx':
      fileType = 'fa-file-powerpoint';
      break;
    case '.xlsx':
      fileType = 'fa-file-excel';
      break;
    default:
      fileType = 'fa-file';
      break;
  }
  return (
    <>
      <div className="pt-3 px-3">
        <Link href={file.url}>
          <a className="flex flex-col items-center font-bold px-4">
            <i className={'fa-regular text-7xl ' + fileType}></i>
            {file.name}
          </a>
        </Link>
      </div>
    </>
  );
};

export { File };
