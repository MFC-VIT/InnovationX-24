"use client";
import "./App.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import MainWrapper from "./wrappers/MainWrapper";
import BaseWrapper from "./wrappers/BaseWrapper";
import NavWrapper from "./wrappers/NavWrapper";
import Landing from "./screens/Landing";
function App() {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.04,
          duration: 2.5,
          smoothWheel: true,
          syncTouch: true,
          syncTouchLerp: 0.04,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
        }}
      >
        <BaseWrapper>
          <NavWrapper>Navbar</NavWrapper>
          <MainWrapper>
            <Landing />
          </MainWrapper>
        </BaseWrapper>
      </ReactLenis>
    </>
  );
}

export default App;
