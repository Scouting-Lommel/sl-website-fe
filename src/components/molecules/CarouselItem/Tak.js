import Link from "next/link";
import Image from "@/components/atoms/Image";

const Tak = ({ info }) => {
  return (
    <Link href={info.Href.Page}>
      <a className="w-64 h-64 relative rounded-full overflow-hidden hover:border-2 border-black top-0">
        {info.Image.data && (
          <Image
            src={info.Image.data.attributes.url}
            styling="rounded-full"
            alt=""
          />
        )}

        <div className="absolute px-6 py-4 flex justify-center w-full h-full rounded-full">
          <div className="flex flex-col justify-center">
            <div className="bg-violet-300 bg-opacity-70">
              <h3 className="text-2xl font-bold">{info.Title}</h3>
              <h4>{info.Description}</h4>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export { Tak };
