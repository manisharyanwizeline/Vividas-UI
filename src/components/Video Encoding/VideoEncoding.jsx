import React from "react";
import styled from "styled-components";
import EncodeImg from "../../assets/images/EncodeVid.png";
import LiveImg from "../../assets/images/EncodeStream.png";
import Divider from "@mui/material/Divider";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Tooltip from "@mui/material/Tooltip";

const VideoContainer = styled.div`
  height: 458px;
  width: 689px;
  left: 294px;
  top: 250px;
  border-radius: 0px;
  background: #ffffff;
  position: absolute;
`;

const EncodeVideoButtonContainer = styled.div`
  height: 30px;
  width: 180px;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: #4d7cfe;
  text-transform: capitalize;
  color: #ffffff;
  top: calc(78% - 36px / 2 - 58px);
  font-style: normal;
  line-height: 30px;
  text-align: center;
  boxshadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)";
  border-radius: 6px;
  position: absolute;
  left: 16.41%;
  right: 66.09%;
  bottom: 44.03%;
`;

const EncodeLiveButtonContainer = styled.div`
  height: 32px;
  width: 180px;
  border-radius: 0px;
  position: absolute;
  left: 60.16%;
  letter-spacing: 0.5px;
  right: 50.23%;
  bottom: 42.03%;
  top: calc(78% - 36px / 2 - 58px);
  font-style: normal;
  text-align: center;
  boxshadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)";
  border-radius: 6px;
  font-family: Rubik;
  font-size: 12x;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  background: #4d7cfe;
  text-transform: capitalize;
  color: #ffffff;
`;

const EncodeVideoImgContainer = styled.div`
  letter-spacing: 0px;
  position: absolute;
  top: calc(30% - 20px / 2 - 28.99px);
  left: calc(21.5% - 20px / 2 - 28.99px);
  padding: 20px;
`;

const EncodeStreamImgContainer = styled.div`
  letter-spacing: 0px;
  position: absolute;
  top: calc(32% - 20px / 2 - 28.99px);
  left: calc(65% - 20px / 2 - 28.99px);
  padding: 20px;
`;

const VideoStream = () => {
  return (
    <VideoContainer>
      <Tooltip title="Video On Demand">
        <OndemandVideoIcon sx={{ pl: 2, pt: 0.5 }} />
      </Tooltip>
      <Divider variant="middle" sx={{ mt: 1 }} light={true} />
      <EncodeVideoImgContainer>
        <img src={EncodeImg} alt="upload" height="96.83px" width="140px" />
      </EncodeVideoImgContainer>
      <EncodeStreamImgContainer>
        <img src={LiveImg} alt="upload" height="90px" width="150px" />
      </EncodeStreamImgContainer>
      {/* <HeaderTextTooltip>Encode a Video or a Live Stream</HeaderTextTooltip> */}
      <Tooltip title="Provide a video source to encode">
        <EncodeVideoButtonContainer>Encode Video</EncodeVideoButtonContainer>
      </Tooltip>
      <Tooltip title="Provide a source for live stream">
        <EncodeLiveButtonContainer>
          Encode Live Stream
        </EncodeLiveButtonContainer>
      </Tooltip>
    </VideoContainer>
  );
};

export default VideoStream;
