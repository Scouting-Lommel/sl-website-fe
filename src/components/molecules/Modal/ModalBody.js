import Input from "@/components/atoms/Form/Input";
import WYSIWYG from "@/components/atoms/WYSIWYG";
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
const ModalBody = ({bodyElements}) => {
    return (<>
        {bodyElements.map((ip, i) => {
            switch (ip.type) {
                case "bigtext":
                    break;
                case "text":
                    break;
                case "richtext":
                    break;
                case "image":
                    break;
                case "wysiwyg":
                    return (
                        <>
                            <div key={"modal" + i}>
                            <label htmlFor={ip.id} className="text-white">
                                {ip.name + ":"}
                            </label>
                            <WYSIWYG args={ip}/>
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
    </>)
}

export { ModalBody }