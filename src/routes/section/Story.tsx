import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import sun from "../../images/sun.png";
import siwoo_1 from "../../images/siwoo_1.jpeg";
import PictureDiary from "../../components/PictureDiary/PictureDiary";

const StorySectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .swiper {
    height: 100%;
    width: 100%;

    .swiper-wrapper {
      width: 100%;

      .swiper-slide {
        width: 100%;

        .swiper-item-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const SunBox = styled.div`
  position: absolute;
  display: flex;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 900;
`;

const Sun = styled.img`
  width: 100%;
`;

const SunInImgBox = styled.div`
  margin: 0 auto;
  z-index: 901;
  width: 90%;
  position: relative;
`;

const SunInImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const CloudBox = styled.div``;

export default function Story() {
    return (
        <StorySectionWrapper id="story_id" style={{height: "100vh"}}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="swiper-item-wrapper">
                        <PictureDiary year={"2023"} month={"9"} day={"27"} week={"수"} weather={"맑음"} picture={siwoo_1}
                                      description={"가나다라마바사아자차"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item-wrapper"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item-wrapper"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-item-wrapper"></div>
                </SwiperSlide>
            </Swiper>
            {/*<SunBox>*/}
            {/*    <Sun src={sun}/>*/}
            {/*    <SunInImgBox>*/}
            {/*        <SunInImg src={siwoo_1}/>*/}
            {/*    </SunInImgBox>*/}
            {/*</SunBox>*/}
        </StorySectionWrapper>
    );
}
