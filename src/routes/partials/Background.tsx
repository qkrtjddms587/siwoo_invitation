import styled from "styled-components";
import CloudPage from "./CloudPage";

const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

export default function Background() {
  return (
    <BackgroundWrapper>
      <CloudPage />
    </BackgroundWrapper>
  );
}
