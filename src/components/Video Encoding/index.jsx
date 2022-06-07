import React from "react";
import styled from "styled-components";
import LogsContainer from "../LogsContainer";
import VideoEncoding from "./VideoEncoding";
import SourceCode from "../SourceCode";
import Wrapper from "../Container";
import Navbar from "../Navbar";
import UpperFrame from "../UpperFrame";
import Footer from "../Footer";

const VideoContainer = () => {
  return (
    <Wrapper>
      <Navbar />
      <UpperFrame />
      <VideoEncoding />
      <LogsContainer />
      <SourceCode />
      <Footer />
    </Wrapper>
  );
};

export default VideoContainer;
