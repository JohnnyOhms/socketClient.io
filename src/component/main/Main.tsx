import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import EmitEvent from "../Event/EmitEvent";
import Display from "../Event/Display";
import ListenEvent from "../Event/ListenEvent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "100vh",
}));

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Item>
            <EmitEvent />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <Display />
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>
            <ListenEvent />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
