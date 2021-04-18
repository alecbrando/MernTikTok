import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export type VideoSideBarPropTypes = {
  likes?: number;
  shares?: number;
  messages?: number;
};

function VideoSideBar({ likes, shares, messages }: VideoSideBarPropTypes) {
  const [liked, setLiked] = useState(false);
  return (
    <VideoSideBarContainer>
      <VideoSideBarButton>
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={() => setLiked((liked) => !liked)}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => setLiked((liked) => !liked)}
          />
        )}
        {/* @ts-ignore */}
        <p>{liked ? likes + 1 : likes}</p>
      </VideoSideBarButton>
      <VideoSideBarButton>
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </VideoSideBarButton>
      <VideoSideBarButton>
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
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
