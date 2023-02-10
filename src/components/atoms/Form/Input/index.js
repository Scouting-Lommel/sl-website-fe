import WYSIWYG from '@/components/atoms/WYSIWYG';

const Input = ({ args }) => {
  if (args.type == 'wysiwyg') {
    return (
      <>
        <WYSIWYG args={args} />
      </>
    );
  }
  return (
    <>
      <input
        type={args.type}
        name={args.name}
        id={args.id}
        defaultValue={args.defaultValue}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};

export default Input;
