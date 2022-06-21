import Link from 'next/link'
import ComponentImage from '../atoms/ComponentImage'
import ComponentLink from '../atoms/ComponentLink'

const CarouselItem = ({info, index}) => {
    if(!info.Href) return <div>Invalid carousel item input</div>
    return (
        <div
          key={index}
          className="text-center relative w-64 h-64"
        >
            <Link href={info.Href.Page}>
                <a className="flex flex-col h-4/6 align-top">
                    <div className="flex-auto justify-center">
                        <ComponentImage args={info.Image}/>
                    </div>
                    <h3 className="text-2xl">{info.Title}</h3>
                    <h4>{info.Description}</h4>
                </a>
            </Link>
        </div>
      );
}

export {CarouselItem}