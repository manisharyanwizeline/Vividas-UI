import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ColumnGrid = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={1} columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ColumnGrid;
