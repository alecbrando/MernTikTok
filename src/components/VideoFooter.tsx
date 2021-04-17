import React from "react";
import styled, { keyframes } from "styled-components";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <VideoFooterContainer>
      <VideoFooterInsideText>
        <h2>@alecbrando</h2>
        <p>Some sorta description</p>
        <VideoFooterTicker>
          <MusicNote />
          <TickerComponent mode="smooth">
            {({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </TickerComponent>
        </VideoFooterTicker>
      </VideoFooterInsideText>
      <VideoFooterSpinner
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="spinner"
      />
    </VideoFooterContainer>
  );
}

export default VideoFooter;

const VideoFooterContainer = styled.div`
  position: relative;
  color: white;
  bottom: 150px;
  margin-left: 40px;
  display: flex;
`;
const VideoFooterInsideText = styled.div`
  flex: 1;
  > h2 {
    padding-bottom: 20px;
  }
  > p {
    padding-bottom: 20px;
  }
`;

const VideoFooterTicker = styled.div`
  > .ticker {
    height: fit-content;
    margin-left: 30px;
    width: 60%;
  }
`;
const MusicNote = styled(MusicNoteIcon)`
  position: absolute;
`;
const spinTheRecord = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const VideoFooterSpinner = styled.img`
  animation: ${spinTheRecord} infinite 5s linear;
  height: 50px;
  filter: invert(1);
  position: absolute;
  bottom: 0;
  right: 20px;
`;
const TickerComponent = styled(Ticker)`
  > p {
    padding-top: 7px;
  }
`;
