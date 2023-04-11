import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { connectSocket } from "../../slice";

const AppNavBar = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector((state) => state.main.isConnected);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      return alert("input a socket address");
    }
    dispatch(connectSocket(value));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ display: "flex" }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <RssFeedIcon sx={{ color: isConnected ? "green" : "red" }} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              fontSize: "15px",
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            Socket.io Client
          </Typography>
          <div id="form-section">
            <form className="search-bar" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Server address"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="search-icon" style={{ cursor: "pointer" }}>
                connect
              </button>
            </form>
          </div>

          <div className="social">
            <a href="">
              <GitHubIcon />
            </a>
            <a href="">
              <LinkedInIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
