import { CarouselItem } from './CarouselItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// src = https://www.npmjs.com/package/react-multi-carousel

const ItemCarousel = ({info, leaders}) => {
  const topLength = info.Items.length >> 1;
  const topRow = info.Items.slice(0, topLength)
  const bottomRow = info.Items.slice(topLength, info.Items.length)
  return(
    <>
    <h2 className="py-3 flex justify-around text-4xl font-bold">{info.Title}</h2>
      {info.IsLeaderShowcase && !info.IsGroupsShowcase && leaders != undefined &&
        <>
          <div className="flex justify-around pb-4">
            {leaders.data.map((item, index) => {
              return <CarouselItem info={item.attributes} key={"carItem" + index}/>
            })}
          </div>
        </>}
      {!info.IsLeaderShowcase && info.IsGroupsShowcase && 
      <>
      <div className="grid grid-rows-2 gap-2 bg-green-700 py-2">
        <div className="flex flex-row justify-center gap-x-2">
            {topRow.map((item, index) => {
                    return <CarouselItem info={item} key={"carItemTop" + index}/>
              })
            }
        </div>
        <div className="">
        <div className="flex flex-row justify-center gap-x-2 -mt-5">
            {bottomRow.map((item, index) => {
                    return <CarouselItem index={index} info={item} key={"carItemBottom" + index}/>
              })
            }
        </div>
        </div>
      </div>
      </>
      }
    </>
  )
};

export {ItemCarousel};
