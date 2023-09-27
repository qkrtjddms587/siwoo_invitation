import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  max-width: 768px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  column-gap: 5px;
  z-index: 999;
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
`;

export default function Nav() {
  return (
    <NavContainer>
      <Link to={"/"}>
        <NavColumn>홈</NavColumn>
      </Link>
      <Link to={"/story"}>
        <NavColumn>성장앨범</NavColumn>
      </Link>
      <Link to={"/location"}>
        <NavColumn>장소</NavColumn>
      </Link>
    </NavContainer>
  );
}
