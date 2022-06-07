import { Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #4d7cfe;
  width: 1728px;
  height: 264px;
  blend: Pass through;
`;

const OvalCopy = styled.div`
  position: absolute;
  left: -2.43%;
  right: 82.52%;
  top: -43.94%;
  bottom: 13.64%;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.03;
  height: 344px;
  width: 344px;
  left: -42px;
  top: -116px;
  border-radius: 200px;
`;
const OvalCopyBig = styled.div`
  position: absolute;
  left: -0.29%;
  right: 78.99%;
  top: -20.45%;
  bottom: -18.94%;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.04;
  height: 368px;
  width: 368px;
  left: -5px;
  top: -54px;
  border-radius: 200px;
`;

const OvalRight = styled.div`
  position: absolute;
  width: 214px;
  height: 214px;
  left: 1307px;
  top: 615px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.04;
  top: -43.95%;
  border-radius: 160px;
`;

const OvalRight2 = styled.div`
  position: absolute;
  width: 214px;
  height: 214px;
  left: 1407px;
  top: 815px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.04;
  top: -4.95%;
  border-radius: 160px;
`;

const TitleContainer = styled.div`
  height: 36px;
  width: 200px;
  left: 777px;
  top: 56px;
  border-radius: nullpx;
  font-family: Rubik;
  font-size: 30px;
  font-weight: 600;
  line-height: 35.55px;
  letter-spacing: 0px;
  text-align: center;
  background: #4d7cfe;
  position: absolute;
  left: 44.97%;
  right: 45.08%;
  top: calc(50% - 36px / 2 - 58px);
  font-style: normal;
  text-align: center;
  color: #ffffff; ;
`;

const SubtitleContainer = styled.div`
  height: 21px;
  width: 255px;
  left: 749px;
  top: 99px;
  border-radius: nullpx;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  font-family: Rubik;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  background: #4d7cfe;
  position: absolute;
  height: 21px;
  left: 43.34%;
  right: 43.4%;
  top: calc(50% - 21px / 2 - 22.5px);
  font-style: normal;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.8;
`;

const UpperFrame = () => {
  return (
    <ContainerDiv>
      <OvalCopy />
      <OvalCopyBig />
      <TitleContainer>Vividas DRM</TitleContainer>
      <SubtitleContainer>Integration with Dash Player</SubtitleContainer>
      <OvalRight />
      <OvalRight2 />
    </ContainerDiv>
  );
};

export default UpperFrame;
