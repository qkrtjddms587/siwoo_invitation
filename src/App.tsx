import { Outlet } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Outlet />
    </>
  );
}

export default App;
