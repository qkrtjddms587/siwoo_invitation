import { useEffect } from "react";
import Home from "./section/Home";
import Story from "./section/Story";
import { useParams } from "react-router-dom";
import Nav from "./partials/Nav";
import Background from "./partials/Background";

function MainPage() {
  const { category } = useParams();
  useEffect(() => {
    const storyElement = document.getElementById("story_id");
    if (category === "story") {
      window.scrollTo(0, Number(storyElement?.offsetTop));
    } else {
      window.scrollTo(0, 0);
    }
  }, [category]);

  return (
    <div>
      <Nav />
      <Background />
      <Home />
      <Story />
      {/* \\\<Location/> */}
    </div>
  );
}

export default MainPage;
