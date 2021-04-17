import React from "react";
import "./App.css";
import Video from "./components/Video";
import styled from "styled-components";
function App() {
  return (
    <AppContainer>
      <AppVideos>
        <Video />
        <Video />
      </AppVideos>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  background-color: black;
  display: grid;
  place-items: center;
`;
const AppVideos = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: scroll;
  height: 800px;
  max-width: 500px;
  width: 80%;
  background-color: white;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  --ms-overflow-style: none;
  scrollbar-width: none;
`;
