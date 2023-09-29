import styled from "styled-components";
import siwoo_main_2 from "../../images/siwoo_main_2.png";
import Sun from "../../images/sun.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 760px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px 30px 50px 30px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const HDate = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
`;

const HTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  border: 2px solid black;
  border-radius: 30px;
  padding: 10px 50px 5px 50px;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const ImgBox = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const SunImg = styled.img`
  width: 130%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  z-index: -1;
`;

const Img = styled.img`
  width: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const Desc = styled.span`
  padding: 0 10px;
  width: fit-content;
  word-break: keep-all;
  line-height: 40px;
  font-size: 19px;
  text-align: center;
  display: inline;
  box-shadow: inset 0 -20px 0 #d9fcdb70;
`;

const CmyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  margin-bottom: 30px;
`;

const Date = styled.span``;

const Location = styled.span``;

const FamContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
`;

const FamColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FamTitle = styled.h1`
  font-size: 25px;
  position: absolute;
  top: -15px;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 5px 5px 0px 5px;
`;

const FamName = styled.h1`
  border: 2px solid black;
  border-radius: 20px;
  padding: 25px 20px 10px 20px;
  font-size: 30px;
`;

export default function Home() {
  return (
    <Container id="home_id">
      <Header>
        <HDate>2022.10.10</HDate>
        <HTitle>
          <MainTitle>박시우 첫생일</MainTitle>
        </HTitle>
      </Header>
      <ImgContainer>
        <ImgBox>
          <Img src={siwoo_main_2} />
        </ImgBox>
        <SunImg src={Sun} />
      </ImgContainer>
      <DescContainer>
        <Desc>시우가 건강하게 자랄 수 있도록</Desc>
        <Desc>사랑으로 지켜봐주신 소중한 분들께</Desc>
        <Desc>감사의 마음을 전하고자 합니다.</Desc>
      </DescContainer>
      <CmyContainer>
        <Date>2023. 09. 30(토) PM 3:00</Date>
        <Location>아현정 이음채</Location>
      </CmyContainer>
      <FamContainer>
        <FamColumn>
          <FamTitle>아빠</FamTitle>
          <FamName>박성은</FamName>
        </FamColumn>
        <FamColumn>
          <FamTitle>엄마</FamTitle>
          <FamName>유정은</FamName>
        </FamColumn>
      </FamContainer>
    </Container>
  );
}
