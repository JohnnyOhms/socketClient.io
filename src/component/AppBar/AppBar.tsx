import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const AppNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <RssFeedIcon />
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
          <form className="search-bar">
            <input type="text" placeholder="Server address" />
            <button className="search-icon" style={{ cursor: "pointer" }}>
              connect
            </button>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppNavBar;
