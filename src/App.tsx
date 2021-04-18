import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video";
import styled from "styled-components";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const grabVideos = async () => {
      const res = await fetch("http://7e640cc929ac.ngrok.io/v2/posts", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        console.log(res);
      }
    };
    grabVideos();
  }, []);

  return (
    <AppContainer>
      <AppVideos>
        {data.map((info: any) => {
          return (
            <Video
              channel={info.channel}
              description={info.description}
              song={info.song}
              likes={parseInt(info.likes)}
              messages={parseInt(info.messages)}
              shares={parseInt(info.shares)}
              url={info.url}
            />
          );
        })}
        {/* <Video
          channel="alecbrando"
          description="this works"
          song="99 problems"
          likes={120}
          messages={200}
          shares={400}
          url="https://i.imgur.com/Kb4uYjF.mp4"
        />
        <Video
          channel="alecbrando"
          description="this works"
          song="99 problems"
          likes={120}
          messages={200}
          shares={400}
          url="https://i.imgur.com/5CdJFxW.mp4"
        /> */}
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
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  --ms-overflow-style: none;
  scrollbar-width: none;
`;
