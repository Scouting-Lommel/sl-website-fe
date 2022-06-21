import Image from 'next/image'

export default function ComponentImage({args}){
    if(!args || !args.data || !args.data.attributes) return (<>not a valid image</>); 
    return(
        <>
        <div className="basis-1/2 h-auto relative">
            <Image
                loader={myLoader}
                src={args.data.attributes.url}
                quality={100}
                layout="intrinsic"
                width={300}
                height={300}
            />
        </div>
        </>
    )
}

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}`
  }