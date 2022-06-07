import React from "react";

import styled from "styled-components";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Logs from "../assets/images/Logs.png";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

const LogContainer = styled.div`
  height: 458px;
  width: 439px;
  left: 1049px;
  top: 250px;
  border-radius: 0px;
  background: #ffffff;
  position: absolute;
  width: 439px;
  height: 458px;
  left: 994px;
  top: 250px;
`;

const TextContainer = styled.div`
  height: 22px;
  width: 230px;
  border-radius: nullpx;
  //styleName: Headers/Regular H3;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 200;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  background: #ffffff;
  position: absolute;
  height: 24px;
  left: 22.17%;
  right: 55.21%;
  color: #778ca2;
  top: calc(70% - 24px / 2 - 28.99px);
  /* Headers/Regular H3 */
`;

const ImageContainer = styled.div`
  letter-spacing: 0px;
  position: relative;
  top: calc(20% - 20px / 2 - 28.99px);
  left: calc(26% - 20px / 2 - 28.99px);
  padding: 20px;
`;

const LogsContainer = () => {
  return (
    <LogContainer>
      <Tooltip title="Logs">
        <FormatListBulletedIcon sx={{ pl: 2, pt: 0.5 }} />
      </Tooltip>
      <Divider variant="middle" sx={{ mt: 1 }} light={true} />
      <ImageContainer>
        <img src={Logs} alt="logs" height="123.98" width="229.76px;" />
      </ImageContainer>
      <TextContainer>
        Your Video Logs will show up here when you upload video.
      </TextContainer>
    </LogContainer>
  );
};

export default LogsContainer;
