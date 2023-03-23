import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

const ListenedItem = styled(Paper)(({ theme }) => ({
  // backgroundColor: "#9b5013",
  backgroundColor: " rgb(28, 117, 226)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: "white",
  width: "80%",
  display: "flex",
  margin: theme.spacing(1),
  justifyContent: "space-between",
}));

const ListenEvent = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Stack>
        <Item> Your Event</Item>
      </Stack>
      <div className="listen-event">
        <Stack>
          <ListenedItem>
            joined_room
            <CancelIcon />
          </ListenedItem>
        </Stack>
      </div>

      <form className="listen-bar">
        <input type="text" placeholder="event to listen" />
        <button className="listen-btn">Add</button>
      </form>
    </div>
  );
};

export default ListenEvent;
