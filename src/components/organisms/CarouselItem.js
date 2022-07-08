import Link from 'next/link'
import ComponentImage from '../atoms/ComponentImage'

const CarouselItem = ({info}) => {
    if(!info.Href) {
        return (
            <>
            <div className="hover:bg-gray-200 rounded-md hover:border-2 border-black py-3 px-2">
                <div className="w-32 h-32 relative rounded-full overflow-hidden top-0">
                <ComponentImage src={info.Image.data.attributes.url} styling="rounded-full"/>
                </div>
                <div className="flex flex-col justify-center pt-4">
                    <div>
                        <h3 className="text-base font-bold text-center">{info.FirstName + " " + info.LastName}</h3>
                        <h4>{}</h4>
                    </div>
                </div>
            </div>
            </>
        )
    }
    return (
        <Link href={info.Href.Page}>
            <a className="w-64 h-64 relative rounded-full overflow-hidden hover:border-2 border-black top-0">
                <ComponentImage src={info.Image.data.attributes.url} styling="rounded-full"/>
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
}

export {CarouselItem}