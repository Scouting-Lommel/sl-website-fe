import NextLink from "next/link";

const Link = ({ info }) => {
  if (!info || !info.Page) return <>Non-good argument for link</>;

  const style = info.IsButton
    ? " bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded border-2 border-blue-600"
    : "";

  return (
    <>
      <NextLink href={info.Page}>
        <a className={"text-center font-bold py-2 px-4" + style}>
          {info.Label}
        </a>
      </NextLink>
    </>
  );
};

export default Link;
