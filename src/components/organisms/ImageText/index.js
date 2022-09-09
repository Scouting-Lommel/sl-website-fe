import { Markup } from "interweave";
import Image from "@/components/atoms/Image";

const ImageText = ({ info }) => {
  const leftAlligned = info.ImageLeftAligned ? "flex-row-reverse" : "flex-row";
  return (
    <>
      <div className={"py-5 flex " + leftAlligned}>
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold py-2">{info.Title}</h1>
          <Markup content={info.Content} />
        </div>
        <div className="flex flex-col justify-center flex-auto px-24 py-4">
          <div className="flex justify-center relative w-full h-full">
            {info.Image && info.Image.data && info.Image.data.attributes && (
              <Image src={info.Image.data.attributes.url} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageText;
