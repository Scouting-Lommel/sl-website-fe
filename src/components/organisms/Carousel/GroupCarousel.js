import { CarouselItem } from "@/components/molecules/CarouselItem";

const GroupCarousel = ({ topRow, bottomRow }) => {
    return (
        <div className="grid grid-rows-2 gap-2 bg-green-700 py-2">
        <div className="flex flex-row justify-center gap-x-2">
            {topRow.map((item, index) => {
            return <CarouselItem 
                        info={item} 
                        key={"carItemTop" + index}
                    />;
            })}
        </div>
        <div className="">
            <div className="flex flex-row justify-center gap-x-2 -mt-5">
            {bottomRow.map((item, index) => {
                return (
                <CarouselItem
                    index={index}
                    info={item}
                    key={"carItemBottom" + index}
                />
                );
            })}
            </div>
        </div>
        </div>
    )
}

export { GroupCarousel }