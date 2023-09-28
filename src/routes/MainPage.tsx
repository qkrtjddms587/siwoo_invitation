import { useEffect } from "react";
import Home from "./section/Home";
import Story from "./section/Story";
import { useParams } from "react-router-dom";
import Nav from "./partials/Nav";
import Background from "./partials/Background";
import styled from "styled-components";
import Location from "./section/Location";

function MainPage() {
  const { category } = useParams();
  useEffect(() => {
    const storyElement = document.getElementById("story_id");
    const locationElement = document.getElementById("location_id");
    if (category === "story") {
      window.scrollTo({
        top: Number(storyElement?.offsetTop),
        behavior: "smooth",
      });
    } else if (category === "location") {
      window.scrollTo({
        top: Number(locationElement?.offsetTop),
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [category]);

  return (
    <MainPageWrapper>
      <Nav />
      <Background />
      <Home />
      <Story />
      <Location />
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  max-width: 450px;
  margin: auto;
`;

export default MainPage;
