import { useState } from "react";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
export default function SildeDashboard() {
  const [thums, setThums] = useState<any>(null);
  const listImage = [
    { src: require(`./Images/Slide1.png`) },
    { src: require(`./Images/slide2.png`) },
    { src: require(`./Images/slide3.png`) },
  ]

  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      thumbs={{ swiper: thums }}
      modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}

    >
      {listImage.map((item, index) => {
        return <SwiperSlide key={index}>
          <img
            src={item.src}
            alt=""
            className="w-full h-full lg:rounded-t-2xl rounded-2xl"
            style={{ width: '100%', height: '400px', borderRadius: '10px' }}
          />
        </SwiperSlide>
      })}
    </Swiper>
  )
}
