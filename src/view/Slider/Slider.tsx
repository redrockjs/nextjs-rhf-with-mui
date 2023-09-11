import s from './Slider.module.scss'

import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import {useEffect, useRef, useState} from 'react';
import {Navigation} from "swiper/types/modules";

const imagesList = [
  "/images/file01.jpg",
  "/images/file02.jpg",
  "/images/file03.jpg",
  "/images/file04.jpg",
  "/images/file05.jpg",
  "/images/file06.jpg",
]

function Slider() {

  const [index, setIndex] = useState(0)
  const swiperRef = useRef<SwiperRef>(null)

  useEffect(() => {
    console.log(index)
  }, [index]);

  const ProgressBar = ({value}:{value: number})=>{
    return (
      <div className={s.ProgressBar}>
        <span style={{width: `${value}%`}}></span>
      </div>
    )
  }

  const fraction = 100/imagesList.length

  return (
    <div className={s.Root}>

      <div className={s.Row}>
        <div className={s.Image} style={{backgroundImage: `url(${imagesList[index]})`}}></div>
      </div>
      <div className={s.Row}>
        <button onClick={() => swiperRef.current?.swiper.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current?.swiper.slideNext()}>Next</button>
      </div>
      <br/>
      <div className={s.Row}>
        <ProgressBar value={fraction*(index+1)}/>
      </div>

      <div className={s.Row}>
        current index: {index}
      </div>

      <br/>

      <div className={s.Container}>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={"auto"}
          autoHeight={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => {
            setIndex(swiperRef.current?.swiper.realIndex ?? 0)
          }}
        >

          {imagesList.map(image => {
            return (
              <>
                <SwiperSlide>
                  <img src={image} alt=""/>
                </SwiperSlide>
              </>
            )
          })}

        </Swiper>
      </div>
      <div className={s.Row}>
        <button onClick={() => swiperRef.current?.swiper.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current?.swiper.slideNext()}>Next</button>
      </div>
      <div className={s.Row}>

      </div>
    </div>
  )
}

export default Slider