import React, { useState, useCallback, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Select from "react-select";
import Typography from "@mui/material/Typography";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useAppDispatch } from "../../hooks/hooks";
import { emitEventFunc } from "../../slice/index";

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
  { value: "array", label: "Array" },
];

const EmitEvent = () => {
  const [selected, setSelected] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [input, setInput] = useState<string>("");
  const [code, setCode] = useState("");
  const [data, setData] = useState<any>(null);
  const onChange = useCallback((value: string, viewUpdate: any) => {
    setCode(value);
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selected) {
      switch (selected.value) {
        case "string":
          setCode('""');
          break;
        case "number":
          setCode("1234");
          break;
        case "object":
          setCode("{}");
          break;
        case "array":
          setCode("[]");
          break;

        default:
          break;
      }
    }
  }, [selected]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!code) {
      return alert("input message to emit to server");
    }

    const emitObj = {
      emitName: input,
      content: JSON.stringify(code),
      data: selected?.value,
      time: Date.now(),
    };

    dispatch(emitEventFunc(emitObj));
  };

  return (
    <form onSubmit={handleSubmit}>
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
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
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

      {selected?.value && (
        <div style={{ marginTop: "20px" }}>
          <CodeMirror
            value={code}
            height="200px"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            theme="dark"
          />
        </div>
      )}

      <div className="btn-emit">
        <button className="emit-btn">Emit</button>
      </div>
    </form>
  );
};

export default EmitEvent;
