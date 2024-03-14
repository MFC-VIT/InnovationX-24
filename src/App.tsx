"use client";
import "./App.css";
import MainWrapper from "./wrappers/MainWrapper";
import BaseWrapper from "./wrappers/BaseWrapper";
import NavWrapper from "./wrappers/NavWrapper";
import Landing from "./screens/Landing";
function App() {
  return (
    <>
      <BaseWrapper>
        <NavWrapper>Navbar</NavWrapper>
        <MainWrapper>
          <Landing />
        </MainWrapper>
      </BaseWrapper>
    </>
  );
}

export default App;
