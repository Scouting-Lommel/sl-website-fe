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
                layout={!args.data.attributes.width && !args.data.attributes.height && "fill"}
                
            />
        </div>
        </>
    )
}

const myLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}${src}?w=${width}&q=${quality || 75}`
  }