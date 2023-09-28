import styled from "styled-components";

const DiaryContainer = styled.div`
  width: 738px;
  margin: 20px auto;
`;

const Header = styled.div`
  width: 100%;
  height: 10vh;
  border: 2px solid red;
  background-color: white;
  border-bottom: none;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 40vh;
  border: 2px solid red;
  border-bottom: none;
  background-color: white;
`;

const TextBox = styled.div`
  width: 100%;
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 2px solid red;
  gap: 2px;
  background-color: red;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
`;

export default function Diary() {
  return (
    <DiaryContainer>
      <Header></Header>
      <ImgBox></ImgBox>
      <TextBox>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </TextBox>
    </DiaryContainer>
  );
}
