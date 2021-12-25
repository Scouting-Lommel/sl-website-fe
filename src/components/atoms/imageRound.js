import Image from 'next/image'

export default function ImageRound(person){
  return (<Image className="h-auto w-auto rounded-full self-center"
    src={`/images/${person}.jpg`} // Route of the image file
    height={100} // Desired size with correct aspect ratio
    width={100} // Desired size with correct aspect ratio
    alt={`${person}`}
  />
  );
}