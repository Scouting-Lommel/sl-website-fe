import Image from 'next/image'

// to use this properly, the encompasing div needs a relative style attribute and a size attribute
export default function ComponentImage({src, styling}){
    if(!src) return (<>not a valid image</>); 
    return(
        <>
        <Image
            loader={myLoader}
            src={src}
            quality={100}
            layout="fill"
            className={styling}
            alt="No valid image"
        />
        {/* <div className="basis-1/2 h-auto relative">
            <Image
                loader={myLoader}
                src={args.data.attributes.url}
                quality={100}
                layout="intrinsic"
                width={300}
                height={300}
            />
        </div> */}
        </>
    )
}

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}`
  }