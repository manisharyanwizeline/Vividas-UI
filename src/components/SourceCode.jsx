import React from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import CodeIcon from "@mui/icons-material/Code";
import Tooltip from "@mui/material/Tooltip";
import Code from "../assets/images/Code.png";

const ContainerDiv = styled.div`
  height: 365px;
  width: 1138px;
  top: 719px;
  border-radius: 0px;
  background: #ffffff;
  position: absolute;
  width: 1138px;
  height: 365px;
  left: 295px;
`;

const TextContainer = styled.div`
  height: 24px;
  width: 270px;
  border-radius: nullpx;
  //styleName: Headers/Regular H3;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 300;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: center;
  background: #ffffff;
  position: absolute;
  height: 24px;
  left: 22.17%;
  right: 55.21%;
  top: calc(80% - 24px / 2 - 28.99px);
  left: calc(38.5% - 20px / 2 - 28.99px);
  color: #778ca2;
  /* Headers/Regular H3 */
`;

const ImageContainer = styled.div`
  letter-spacing: 0px;
  position: relative;
  top: calc(22% - 20px / 2 - 28.99px);
  left: calc(40% - 20px / 2 - 28.99px);
  padding: 20px;
`;

const SourceCode = () => {
  return (
    <>
      <ContainerDiv>
        <Tooltip title="Source Code">
          <CodeIcon sx={{ pl: 2, pt: 0.5 }} />
        </Tooltip>
        <Divider variant="middle" sx={{ mt: 1 }} light={true} />
        <ImageContainer>
          <img src={Code} alt="source code" height="141px" width="199px" />
        </ImageContainer>
        <TextContainer>
          The Source code will show up here when you upload a video{" "}
        </TextContainer>
      </ContainerDiv>
    </>
  );
};

export default SourceCode;
