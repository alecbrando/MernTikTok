import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
function VideoSideBar() {
  return (
    <VideoSideBarContainer>
      <VideoSideBarButton>
        <FavoriteIcon fontSize="large" />
        <p>100</p>
      </VideoSideBarButton>
      <VideoSideBarButton>
        <MessageIcon fontSize="large" />
        <p>100</p>
      </VideoSideBarButton>
      <VideoSideBarButton>
        <ShareIcon fontSize="large" />
        <p>100</p>
      </VideoSideBarButton>
    </VideoSideBarContainer>
  );
}

export default VideoSideBar;

const VideoSideBarContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  color: white;
`;
const VideoSideBarButton = styled.div`
  padding: 20px;
  text-align: center;
`;
