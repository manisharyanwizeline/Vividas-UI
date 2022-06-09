import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  width: 1728px;
  height: 30px;
  left: 75px;
  top: 1160px;
  background: #ffffff;
  padding-top: 10px;
  border-radius: 0px, 0px, 10px, 10px;
`;

const TextContainer = styled.div`
  //styleName: 14px / Regular;

  letter-spacing: 0px;
  text-align: left;
  height: 24px;
  width: 306px;
  background: #ffffff;
  border-radius: nullpx;
  position: absolute;
  left: 23px;
  top: calc(42% - 21px / 2 + 2.5px);

  /* 14px / Regular */

  font-family: Rubik;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Bg / 98A9BC */

  color: #98a9bc;
`;

const RightText = styled.div`
  width: 180px;
  left: 1540px;
  height: 210px;
  border-radius: nullpx;
  //styleName: 14px / Regular;
  letter-spacing: 0px;
  position: absolute;
  right: 28px;
  top: calc(42% - 21px / 2 + 2.5px);
  /* 14px / Regular */
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
  text-align: right;

  /* Bg / 98A9BC */

  color: #98a9bc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        © 2018 VIVIDAS PTY LTD - All Rights Reserved.
      </TextContainer>
      <RightText>About VIVIDAS PTY LTD </RightText>
    </FooterContainer>
  );
};

export default Footer;
