import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  width: 1750px;
  height: 40px;
  left: 0px;
  top: 1162px;
  background: #ffffff;
  padding-top: 20px;
  border-radius: 0px, 0px, 8px, 8px;
`;

const TextContainer = styled.div`
  //styleName: 14px / Regular;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  height: 21px;
  width: 303px;
  background: #ffffff;
  border-radius: nullpx;
  position: absolute;
  left: 23px;
  top: calc(42% - 21px / 2 + 2.5px);

  /* 14px / Regular */

  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Bg / 98A9BC */

  color: #98a9bc;
`;

const RightText = styled.div`
  width: 180px;
  left: 1547px;
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
  font-size: 12px;
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
