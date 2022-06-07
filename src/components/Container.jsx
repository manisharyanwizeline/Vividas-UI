import React from "react";
import { Box } from "@mui/material";

const Wrapper = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        p: 0,
        m: 0,
        borderShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 2,
        boxShadow: "10px 10px 5px #aaaaaa",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#F8FAFB" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.600",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        fontSize: "0.875rem",
        fontWeight: "700",
        height: "1200px",
        width: "1728px",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
