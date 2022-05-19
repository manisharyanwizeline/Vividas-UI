import React from "react";
import { AppBar, Typography, Tooltip } from "@mui/material";
import logo from "../assets/images/logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";

const pages = ["Vividas Demo", "Vividas Encoding", "Vividas Video to Stream"];

const ContainerDiv = styled.div`
  right: 0%;
  bottom: 0%;
  left: 0%;
  top: 0%;
  background: #4d7cfe;
  width: 1728px;
  height: 64px;
  blend: Pass through;
  background: linear-gradient(90deg, #4d7cfe 0%, #3055bb 100%);
  position: relative;
`;

const ImageContainer = styled.div`
  height: 32px;
  width: 138px;
  left: 280px;
  top: 16px;
  border-radius: 0px;
  position: absolute;
  width: 138px;
  height: 32px;
  top: 16px;
  background: url(Vividas-Logo-Rev-1.png);
  filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.25));
  margin-right: "200px";
`;

const DemoPage = styled.div`
  position: absolute;
  height: 19px;
  width: 70px;
  left: 1005px;
  top: 22px;
  opacity: 0.9;
  display: "flex";
  alignitems: "center";
  flexwrap: "wrap";
`;

const EncodingPage = styled.div`
  position: absolute;
  height: 19px;
  width: 98px;
  left: 1130px;
  top: 22px;
  opacity: 0.9;
`;

const VODPage = styled.div`
  position: absolute;
  width: 155px;
  height: 19px;
  left: 1282px;
  top: 22px;
  opacity: 0.9;
`;

const StyledLink = styled(NavLink)`
  color: white;
  background-color:white
  margin: 1rem;
  text-decoration: none;
}
`;

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ContainerDiv>
      <AppBar position="static">
        <ImageContainer>
          <img src={logo} width="138px" height="32px" />
        </ImageContainer>
        <Tooltip title="Demo Video">
          <DemoPage>
            <StyledLink to="/home">Demo</StyledLink>
          </DemoPage>
        </Tooltip>
        <Tooltip title="Encoded Video">
          <EncodingPage>
            <StyledLink to="/encoding">Encoding</StyledLink>
          </EncodingPage>
        </Tooltip>
        <Tooltip title="Video to Stream">
          <VODPage>
            <StyledLink to="/">Video to stream</StyledLink>
          </VODPage>
        </Tooltip>
      </AppBar>
    </ContainerDiv>
  );
};

export default Navbar;
