import { useState, useCallback } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Select from "react-select";
import Typography from "@mui/material/Typography";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#1A2027" : theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

const options = [
  { value: "string", label: "String" },
  { value: "number", label: "Number" },
  { value: "object", label: "Object" },
  { value: "json", label: "JSON" },
  { value: "array", label: "Array" },
];

const EmitEvent = () => {
  const [selected, setSelected] = useState<object | null>(null);
  const onChange = useCallback((value: string, viewUpdate: any) => {
    console.log(value);
  }, []);

  return (
    <div>
      <Stack>
        <Item> Emit Event</Item>
      </Stack>

      <Stack
        className="search-bar"
        id="add-bar"
        sx={{
          marginTop: "10px",
          width: "21rem",
        }}
      >
        <input
          type="text"
          placeholder=""
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
        />
      </Stack>

      <Typography
        variant="h6"
        color="inherit"
        component="p"
        sx={{
          fontSize: "13px",
          marginTop: "10px",
          color: "white",
        }}
      >
        Data type :
      </Typography>

      <Select
        className="basic-single"
        classNamePrefix="select"
        value={selected}
        onChange={setSelected}
        isClearable={true}
        isSearchable={true}
        name="color"
        options={options}
      />

      <div style={{ marginTop: "20px" }}>
        <CodeMirror
          value=".log('hello world!');"
          height="200px"
          // extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default EmitEvent;
