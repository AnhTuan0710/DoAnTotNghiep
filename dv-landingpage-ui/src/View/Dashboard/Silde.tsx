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
      className='slide-container'
    >
      {listImage.map((item, index) => {
        return <SwiperSlide key={index} className='slide-item'>
          <img src={item.src} alt="" className='slide-image' />
        </SwiperSlide>
      })}
    </Swiper>
  )
}
