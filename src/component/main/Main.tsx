import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import EmitEvent from "../Event/EmitEvent";
import Display from "../Event/Display";
import OnEvent from "../Event/onEvent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "100%",
  marginTop: 4,
}));

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={3}>
          <div className="grid-wrapper">
            <Item sx={{ background: "grey" }}>
              <EmitEvent />
            </Item>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <div className="grid-wrapper">
            <Item>
              <Display />
            </Item>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          <Item sx={{ background: "grey" }}>
            <OnEvent />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
