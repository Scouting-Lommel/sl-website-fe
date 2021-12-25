import Image from 'next/image'

export default function ImageRound(person){
  return (<Image className="h-32 w-32 rounded-full self-center"
    src={`/images/${person}.jpg`} // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt={`${person}`}
  />
  );
}