import React, { useRef, useState } from "react";
import styled from "styled-components";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
/* <video src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/d749c0bbc465486e9f3fad72d329bbf7/?a=1988&br=4354&bt=2177&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&expire=1618640135&l=202104170015250101890740462801726A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=amZkM2VuOTtuNDMzNzczM0ApZ2g8OTs1ZWUzNzhlaWlkaGdjNV5qZjVpLmhgLS1kMTZzc2NfNS41Ml8wYWEtMDVhYC06Yw%3D%3D&signature=28a18da6c90726186f37f6a892c0a5c6&tk=tt_webid_v2&vl=&vr=" />; */
/* <video src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c001/f2488f59d67d4c12807fa93482ba993a/?a=1988&br=3670&bt=1835&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1618640695&l=2021041700242601018906604747024257&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=2&qs=0&rc=ajQ4eWx2aHA3NDMzNzczM0ApOmQ3PGZoZTw4N2VlOTo4PGdhZC9hZGlhNWtgLS1kMTZzc2JfLi81Xy4tXl5hMzM1MS06Yw%3D%3D&signature=d7dc89b6a7c62f9d12e5910b9726d86a&tk=tt_webid_v2&vl=&vr="/>; */

export type VideoPropTypes = {
  url?: any;
  shares: number;
  likes: number;
  channel: string;
  song: string;
  description: string;
  messages: number;
};

function Video({
  url,
  shares,
  likes,
  channel,
  song,
  description,
  messages,
}: VideoPropTypes) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  console.log(url);

  const handleVideoPlay = () => {
    console.log(videoRef);
    if (playing) {
      setPlaying(false);
      //   @ts-ignore
      videoRef.current.pause();
    } else {
      setPlaying(true);
      //   @ts-ignore
      videoRef.current.play();
    }
  };
  return (
    <VideoContainer>
      <VideoPlayer
        onClick={() => handleVideoPlay()}
        ref={videoRef}
        loop
        src={url}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </VideoContainer>
  );
}

export default Video;

const VideoContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
`;
const VideoPlayer = styled.video`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
