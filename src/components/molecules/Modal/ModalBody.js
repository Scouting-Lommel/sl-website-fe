import Input from "@/components/atoms/Form/Input";
import WYSIWYG from "@/components/atoms/WYSIWYG";
import Image from "@/components/atoms/Image";
// type: Input (default), wysiwyg, title, subtitle, richtext, image
/*
{
    id: string
    type: string
    name: string
    defaultValue: string
    image: string
    text: string
 }
*/
const ModalBody = ({ bodyElements }) => {
  return (
    <>
      {bodyElements.map((ip, i) => {
        switch (ip.type) {
          case "bigtext":
            return (
              <>
                <div key={"modal" + i} className="flex flex-row justify-center">
                  <label htmlFor={ip.id} className="text-white text-xl">
                    {ip.text}
                  </label>
                  <br />
                </div>
              </>
            );
          case "text":
            break;
          case "richtext":
            break;
          case "image":
            return (
              <div className="flex justify-center">
                <div className="w-64 h-64 relative">
                  {ip.image.data && (
                    <Image
                      src={ip.image.data.attributes.url}
                      styling="rounded-xl"
                      alt=""
                    />
                  )}
                </div>
              </div>
            );
          case "wysiwyg":
            return (
              <>
                <div key={"modal" + i}>
                  <label htmlFor={ip.id} className="text-white">
                    {ip.name + ":"}
                  </label>
                  <WYSIWYG args={ip} />
                  <br />
                </div>
              </>
            );

          default: // input
            return (
              <>
                <div key={"modal" + i}>
                  <label htmlFor={ip.id} className="text-white">
                    {ip.name + ":"}
                  </label>
                  <Input args={ip} />
                  <br />
                </div>
              </>
            );
        }
      })}
    </>
  );
};

export { ModalBody };
