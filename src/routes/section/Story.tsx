import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import siwoo_1 from "../../images/siwoo_1.jpeg";
import PictureDiary from "../../components/PictureDiary/PictureDiary";

const StorySectionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  overflow: hidden;

  .swiper {
    height: 100%;
    width: 100%;
    overflow-x: visible;

    .swiper-wrapper {
      /* width: 100%; */
      .swiper-slide {
        .swiper-item-wrapper {
          /* width: 100%; */
          height: 100%;
        }
      }
    }
  }
`;

export default function Story() {
  return (
    <StorySectionWrapper id="story_id" style={{ height: "100vh" }}>
      <Swiper spaceBetween={20} slidesPerView={1} centeredSlides={true}>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"9"}
              day={"27"}
              week={"수"}
              weather={"맑음"}
              picture={siwoo_1}
              description={"제목: 백화점 간 날"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"9"}
              day={"27"}
              week={"수"}
              weather={"맑음"}
              picture={siwoo_1}
              description={"가나다라마바사아자차"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"9"}
              day={"27"}
              week={"수"}
              weather={"맑음"}
              picture={siwoo_1}
              description={"가나다라마바사아자차"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"9"}
              day={"27"}
              week={"수"}
              weather={"맑음"}
              picture={siwoo_1}
              description={"가나다라마바사아자차"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </StorySectionWrapper>
  );
}
