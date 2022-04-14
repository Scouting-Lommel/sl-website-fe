import { CarouselItem } from './CarouselItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// src = https://www.npmjs.com/package/react-multi-carousel

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const ItemCarousel = ({info}) => {
  return(
      <>
      <h2 className="py-3 flex justify-around text-4xl font-bold">{info.Title}</h2>
      <div className="px-6 pb-3">
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                info.Items.map((item, index) => {
                    return <CarouselItem index={index} info={item}/>
                })
            }
        </Carousel> 
      </div>
      </>
  )
};

export {ItemCarousel};
