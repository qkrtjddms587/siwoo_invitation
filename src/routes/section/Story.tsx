import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import PictureDiary from "../../components/PictureDiary/PictureDiary";
import siwoo_story_1 from "../../images/siwoo_story_1.jpeg";
import siwoo_story_2 from "../../images/siwoo_story_2.jpeg";
import siwoo_story_3 from "../../images/siwoo_story_3.jpeg";
import siwoo_story_4 from "../../images/siwoo_story_4.jpeg";
import siwoo_story_5 from "../../images/siwoo_story_5.jpeg";

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
              year={"2022"}
              month={"10"}
              day={"10"}
              week={"월"}
              weather={"맑음"}
              picture={siwoo_story_1}
              description={
                "시우가 태어난날이에요.엄마아빠를 만나 행복해요.무럭무럭 자라는 시우를 잘지켜봐주세요!"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"1"}
              day={"17"}
              week={"화"}
              weather={"맑음"}
              picture={siwoo_story_2}
              description={
                "시우가 태어난지 백일이 되었어요! 맘마를 많이 먹어서 오동통 볼상이 올랐어요~"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"4"}
              day={"27"}
              week={"목"}
              weather={"맑음"}
              picture={siwoo_story_3}
              description={
                "태어난지 200일이 되었어요! 이유식도 먹는 엉아가 되었답니다~ 웃음이 많아진 시우에요!"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-item-wrapper">
            <PictureDiary
              year={"2023"}
              month={"8"}
              day={"15"}
              week={"토"}
              weather={"맑음"}
              picture={siwoo_story_4}
              description={
                "시우가 태어난지 300일이 되었어요! 엄마 손을 잡고 일어설 수 있어요~얼른 걷고싶어요!"
              }
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
              picture={siwoo_story_5}
              description={
                "시우의 첫번째 추석이에요! 추석이 지나면 시우의 첫번째 생일이 다가온답니다~ 모두들 축하해주세요!^^"
              }
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </StorySectionWrapper>
  );
}
