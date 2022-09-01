// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GroupCarousel } from "./GroupCarousel";
import { LeaderCarousel } from "./LeaderCarousel";

// src = https://www.npmjs.com/package/react-multi-carousel

const ItemCarousel = ({ info, leaders }) => {
  const topLength = info.Items.length >> 1;
  const topRow = info.Items.slice(0, topLength);
  const bottomRow = info.Items.slice(topLength, info.Items.length);
  return (
    <div className="rounded-md shadow-sm border-black border-2">
      <h2 className="py-3 flex justify-around text-4xl font-bold border-b-2 border-black">
        {info.Title}
      </h2>
      {info.IsLeaderShowcase && !info.IsGroupsShowcase && leaders != undefined && (
        <LeaderCarousel leaders={leaders}/>
      )}
      {!info.IsLeaderShowcase && info.IsGroupsShowcase && (
        <GroupCarousel topRow={topRow} bottomRow={bottomRow} />
      )}
    </div>
  );
};

export default ItemCarousel;
