import styled from "styled-components";
import { useEffect, useState } from "react";

interface IPictureDiaryProps {
  year: string;
  month: string;
  day: string;
  week: string;
  weather: string;
  picture: string;
  description: string;
  picPosition?: string;
}

function PictureDiary(props: IPictureDiaryProps) {
  const {
    year,
    month,
    day,
    weather,
    week,
    picture,
    picPosition = "center",
    description,
  } = props;
  const [descriptionArr, setDescriptionArr] = useState<any>([]);

  useEffect(() => {
    const arr: any = new Array(49);
    for (let i = 0; i < description.length; i++) {
      arr[i] = description[i];
    }
    setDescriptionArr([...arr]);
  }, []);

  return (
    <PictureDiaryWrapper>
      <div className="picture-diary-header-wrapper">
        <div className="picture-diary-date-wrapper">
          <div className="date-item">
            {year}
            <div className="static-text">년</div>
          </div>
          <div className="date-item">
            {month}
            <div className="static-text">월</div>
          </div>
          <div className="date-item">
            {day}
            <div className="static-text">일</div>
          </div>
          <div className="date-item">
            {week}
            <div className="static-text">요일</div>
          </div>
        </div>
        <div
          className="picture-diary-weather-wrapper"
          style={{ textAlign: "center" }}
        >
          날씨
        </div>
        <div className="picture-diary-weather-wrapper">{weather}</div>
      </div>
      <div className="picture-diary-picture-wrapper">
        <img src={picture} style={{ objectPosition: picPosition }} />
      </div>
      <div className="picture-diary-description-wrapper">
        {descriptionArr.map((item: any, i: any) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </PictureDiaryWrapper>
  );
}

const PictureDiaryWrapper = styled.div`
  width: auto;
  height: calc(100% - 80px);
  border: 1px solid red;
  background-color: #ffffff;
  margin: 20px 0 40px 0;

  .picture-diary-header-wrapper {
    height: 60px;
    width: 100%;
    display: flex;

    .picture-diary-date-wrapper {
      width: 70%;
      padding: 20px 20px;
      display: flex;
      justify-content: space-between;

      .date-item {
        font-size: 13px;
        display: flex;

        .static-text {
          font-size: 13px;
          padding: 0 5px;
        }
      }
    }

    .picture-diary-weather-wrapper {
      font-size: 12px;
      width: 15%;
      padding: 20px 10px;
      border-left: 1px solid red;
    }
  }

  .picture-diary-picture-wrapper {
    height: calc(50% - 40px);
    width: 100%;
    display: flex;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    box-shadow: inset 0px 0px 7px 7px #a6d9ea;
    padding: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: flex;
    }
  }

  .picture-diary-description-wrapper {
    display: grid;
    width: 100%;
    height: calc(50% - 20px);
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 1px;
    background-color: red;

    & > div {
      font-size: 21px;
      padding: 7px;
      background-color: #ffffff;
    }
  }
`;

export default PictureDiary;
