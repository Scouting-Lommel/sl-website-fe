import Image from "@/components/atoms/Image";
import { Modal } from "@/components/molecules/Modal";

const Leader = ({info, id}) => {
    console.log(info)
    const button = (<button>
        <a>
          <div className="hover:bg-gray-200 rounded-md hover:border-2 border-black py-3 px-2">
            <div className="w-32 h-32 relative rounded-full overflow-hidden top-0">
              <Image
                src={info.Image.data.attributes.url}
                styling="rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center pt-4">
              <div>
                <h3 className="text-base font-bold text-center">
                  {info.FirstName + " " + info.LastName}
                </h3>
                <h4>{}</h4>
              </div>
            </div>
          </div>
        </a>
        </button>)
    return (
        <Modal 
        title={info.FirstName + " " + info.LastName} 
        params={[]} 
        buttonID={"leadermodal" + id} 
        buttonText={button} 
        />
    );
}

export { Leader }