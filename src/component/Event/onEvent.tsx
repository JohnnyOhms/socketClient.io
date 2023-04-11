import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { onEventFunc, updateOnEventItems } from "../../slice";

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

const OnEvent = () => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const socket = useAppSelector((state) => state.main.socket);

  useEffect(() => {
    dispatch(updateOnEventItems(items));

    if (items[0]) {
      dispatch(onEventFunc(items[0]));
    }

    if (items[1]) {
      dispatch(onEventFunc(items[1]));
    }

    if (items[2]) {
      dispatch(onEventFunc(items[2]));
    }

    if (items[3]) {
      dispatch(onEventFunc(items[3]));
    }

    if (items[4]) {
      dispatch(onEventFunc(items[4]));
    }
  }, [items]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setItems((prev) => {
      return [...prev, value];
    });
    setValue("");
  };

  const handleDelete = (id: number) => {
    let newItems: string[] = [];
    newItems = [...newItems, ...items];
    newItems.splice(id, 1);
    setItems((prev) => {
      return [...newItems];
    });
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <Stack>
        <Item> Your Event</Item>
      </Stack>
      <div className="listen-event">
        <Stack>
          {items &&
            items.map((item, index) => {
              return (
                <ListenedItem key={index}>
                  {item}
                  <CancelIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index)}
                  />
                </ListenedItem>
              );
            })}
        </Stack>
      </div>

      <form className="listen-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="event to listen"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="listen-btn">Add</button>
      </form>
    </div>
  );
};

export default OnEvent;
