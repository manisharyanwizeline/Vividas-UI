import React, { Component } from "react";
import VideoToStream from "./components/Video to Stream/index.jsx";
import VideoEncoding from "./components/Video Encoding";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<VideoToStream />} />
          <Route exact path="/home" element={<VideoToStream />} />
          <Route exact path="/encoding" element={<VideoEncoding />} />
        </Routes>
      </div>
    );
  }
}

export default App;
