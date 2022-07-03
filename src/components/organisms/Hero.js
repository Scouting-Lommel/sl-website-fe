import ComponentLink from "../atoms/ComponentLink"
import Image from 'next/image'

const Hero = ({info}) => {
    return(
        <>
        {info.IsHomePage && 
        <div className="flex justify-center pt-4">
            <div className="h-64 w-10/12 relative">
                <Image
                    loader={myLoader}
                    src={info.Image.data.attributes.url}
                    quality={100}
                    layout="fill"
                />
                <div className="absolute bottom-0 px-6 py-4 flex justify-center w-full">
                    <div className="bg-green-600 text-lg rounded text-white hover:bg-green-700 opacity-60 hover:opacity-100">
                        {info.Links !== undefined && info.Links.map((link, i) => {
                            return <ComponentLink info={link} key={"hero"+i}/>
                        })}
                    </div>
                </div>
            </div>
        </div>    
        }    
        </>
    )
}

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}`
  }

export {Hero}