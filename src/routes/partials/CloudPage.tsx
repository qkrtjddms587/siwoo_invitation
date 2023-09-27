import { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import clude from "../../images/cloud.png";

function CloudPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const createCloudElement = (intervalCount: number) => {
    for (let i = 1; i <= intervalCount; i++) {
      const imgElement = document.createElement("img");
      const width = Math.random() * 100 + 80;
      const top = Math.random() * 100;
      const duration = Math.random() * 20 + 15;
      imgElement.src = clude;
      imgElement.style.position = "absolute";
      imgElement.style.width = width + "px";
      imgElement.style.top = top + "%";
      imgElement.style.right = "70%";
      imgElement.style.animationDuration = duration + "s";
      imgElement.classList.add("move-animation");
      backgroundRef.current?.appendChild(imgElement);
      setTimeout(() => imgElement.remove(), 36000);
    }
  };

  useEffect(() => {
    createCloudElement(1);
    const interval = setInterval(() => createCloudElement(3), 4000);

    return () => clearInterval(interval);
  }, []);

  return <CloudPageWrapper ref={backgroundRef}></CloudPageWrapper>;
}

const move = keyframes`
  0% {
    opacity: 0;
  }
  3% {
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 0;
    right: -500px
  }
`;
const CloudPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #99ccff, #c8dffa);

  .move-animation {
    animation: linear ${move} forwards;
  }
`;

export default CloudPage;
