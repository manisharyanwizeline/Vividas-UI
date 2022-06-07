import React from "react";
import LogsContainer from "../LogsContainer";
import VideoStream from "./VideoStream";
import SourceCode from "../SourceCode";
import Wrapper from "../Container";
import Navbar from "../Navbar";
import UpperFrame from "../UpperFrame";
import Footer from "../Footer";

const VideoToStream = () => {
  return (
    <Wrapper>
      <Navbar />
      <UpperFrame />
      <VideoStream />
      <LogsContainer />
      <SourceCode />
      <Footer />
    </Wrapper>
  );
};

export default VideoToStream;
