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
  backgroundColor: "#9b5013",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: "white",
  width: "80%",
  display: "flex",
  margin: theme.spacing(1),
}));

const ListenEvent = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Stack>
        <Item> Your Event</Item>
      </Stack>
      <div
        style={{
          marginTop: "40px",
          height: "100%",
        }}
      >
        <Stack>
          <ListenedItem>
            joined_room
            <CancelIcon
              sx={{
                margin: "auto",
                position: "absolute",
                right: 90,
                cursor: "pointer",
              }}
            />
          </ListenedItem>
        </Stack>
      </div>

      <form
        className="search-bar"
        id="add-bar"
        style={{
          position: "absolute",
          bottom: 10,
          width: "21rem",
        }}
      >
        <input type="text" placeholder="" style={{ width: "100%" }} />
        <button
          className="search-icon"
          style={{
            cursor: "pointer",
            backgroundColor: "#1c1919ca",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ListenEvent;
