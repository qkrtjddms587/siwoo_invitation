import styled from "styled-components"
import {useEffect, useState} from "react";

interface IPictureDiaryProps {
    year: string;
    month: string;
    day: string;
    week: string;
    weather: string;
    picture: string;
    description: string;
}

function PictureDiary(props: IPictureDiaryProps) {
    const {year, month, day, weather, week, picture, description} = props;
    const [descriptionArr, setDescriptionArr] = useState([])

    useEffect(() => {
        const arr = new Array(30)
        for (let i = 0; i < description.length; i++) {
            arr[i] = description.substring(0, 1)
        }
        setDescriptionArr([...arr])
    }, [])

    return (
        <PictureDiaryWrapper>
            <div className="picture-diary-header-wrapper">
                <div className="picture-diary-date-wrapper">
                    <div className="date-item">{year}
                        <div className="static-text">년</div>
                    </div>
                    <div className="date-item">{month}
                        <div className="static-text">월</div>
                    </div>
                    <div className="date-item">{day}
                        <div className="static-text">일</div>
                    </div>
                    <div className="date-item">{week}
                        <div className="static-text">요일</div>
                    </div>
                </div>
                <div className="picture-diary-weather-wrapper" style={{textAlign: "center"}}>
                    날씨
                </div>
                <div className="picture-diary-weather-wrapper">
                    {weather}
                </div>
            </div>
            <div className="picture-diary-picture-wrapper">
                <img src={picture}/>
            </div>
            <div className="picture-diary-description-wrapper">
                {descriptionArr.map((item, i) => <div key={i}>{item}</div>)}
            </div>
        </PictureDiaryWrapper>
    )

}

const PictureDiaryWrapper = styled.div`
  width: auto;
  height: calc(100% - 80px);
  border: 1px solid red;
  background-color: #ffffff;
  margin: 20px 40px 40px 40px;

  .picture-diary-header-wrapper {
    height: 60px;
    width: 100%;
    display: flex;

    .picture-diary-date-wrapper {
      width: 70%;
      padding: 20px 30px;
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
    padding: 20px;
    border-bottom: 1px solid red;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      display: flex;
    }
  }

  .picture-diary-description-wrapper {
    display: grid;
    width: 100%;
    height: calc(50% - 20px);
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1px;
    background-color: red;

    & > div {
      font-size: 24px;
      padding: 20px;
      background-color: #ffffff;
    }
  }

`


export default PictureDiary