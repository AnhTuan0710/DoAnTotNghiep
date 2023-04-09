import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4 } from "../../assets";
export default function SildeDashboard() {
  const listImage = [
    { src: SLIDE_4 },
    { src: SLIDE_3 },
    { src: SLIDE_1 },
    { src: SLIDE_2 },
  ]

  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
      className='slide-container'
    >
      {listImage.map((item, index) => {
<<<<<<< HEAD
        return <SwiperSlide key={index}>
          <img
            src={item.src}
            alt=""
            style={{ width: '100%', height: '500px', borderRadius: '5px' }}
          />
=======
        return <SwiperSlide key={index} className='slide-item'>
          <img src={item.src} alt="" className='slide-image' />
>>>>>>> 8b91beb690538cd2a2e4106c3a02dae7d064c17e
        </SwiperSlide>
      })}
    </Swiper>
  )
}
