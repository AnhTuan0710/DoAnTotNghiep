import { FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
export default function ListBranch() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
      style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px'}}
    >
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img style={{ width: '100%', height: '100px', borderRadius:'10px' }} alt='' />
        <h5>Demo</h5>
      </SwiperSlide>
    </Swiper>
  )
}
