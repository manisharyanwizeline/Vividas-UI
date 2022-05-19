import React from "react";
import styled from "styled-components";
import UploadImg from "../../assets/images/UploadImg.png";
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
const HeaderTextTooltip = styled.div`
  height: 24px;
  width: 300px;
  border-radius: nullpx;
  font-family: Rubik;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: center;
  background: #ffffff;
  color: #252631;
  position: absolute;
  height: 24px;
  left: 29.17%;
  right: 55.21%;
  top: calc(70% - 24px / 2 - 28.99px);
  /* Headers/Regular H3 */
`;
const ButtonContainer = styled.div`
  height: 36px;
  width: 172px;
  left: 780px;
  top: 56px;
  border-radius: nullpx;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 550;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: center;
  background: #4d7cfe;
  text-transform: capitalize;
  color: #ffffff;
  position: absolute;
  height: 36px;
  left: 37.97%;
  right: 45.97%;
  top: calc(90% - 36px / 2 - 58px);
  font-style: normal;
  line-height: 36px;
  text-align: center;
  boxshadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)";
  border-radius: 6px;
`;

const ImageContainer = styled.div`
  letter-spacing: 0px;
  position: relative;
  top: calc(20% - 20px / 2 - 28.99px);
  left: calc(35% - 20px / 2 - 28.99px);
  padding: 20px;
`;

const VideoStream = () => {
  return (
    <VideoContainer>
      <Tooltip title="Video On Demand">
        <OndemandVideoIcon sx={{ pl: 2, pt: 0.5 }} />
      </Tooltip>
      <Divider variant="middle" sx={{ mt: 1 }} light={true} />
      <ImageContainer>
        <img src={UploadImg} alt="upload" height="163.17px" width="242px;" />
      </ImageContainer>
      <HeaderTextTooltip>
        Drag your files here to upload <br />
        or
      </HeaderTextTooltip>
      <ButtonContainer>Select Files</ButtonContainer>
    </VideoContainer>
  );
};

export default VideoStream;
