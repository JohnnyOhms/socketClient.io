import { Stack } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Display = () => {
  const value = 12345;

  return (
    <div className="display-section">
      <div className="btn-emit">
        <button className="emit-btn" style={{ width: "10%" }}>
          Clear
        </button>
      </div>
      <hr />
      <Stack
        width="100%"
        style={{
          marginTop: "10px",
          display: "flex",
        }}
      >
        <div className="align-mssg">
          <span
            style={{
              visibility: "hidden",
            }}
          >
            aligned_hidden
          </span>

          <div className="display-mssg">
            <Stack sx={{ height: "70px", padding: "4px 7px" }}>
              <p>23 thursday march</p>
              <p>event: event</p>
              <p>Data: Data</p>
            </Stack>
            <Stack>
              <CodeMirror
                value={JSON.stringify(value)}
                height="150px"
                extensions={[javascript({ jsx: true })]}
                theme="dark"
                readOnly={true}
              />
            </Stack>
          </div>
        </div>
        {/*  */}

        <div className="align-mssg" style={{ flexDirection: "row-reverse" }}>
          <span
            style={{
              visibility: "hidden",
            }}
          >
            aligned_hidden
          </span>

          <div className="display-mssg" style={{ borderRadius: "20px 0 0 0" }}>
            <Stack sx={{ height: "70px", padding: "4px 7px" }}>
              <p>23 thursday march</p>
              <p>event: event</p>
              <p>Data: Data</p>
            </Stack>
            <Stack>
              <CodeMirror
                value={JSON.stringify(value)}
                height="150px"
                extensions={[javascript({ jsx: true })]}
                theme="dark"
                readOnly={true}
              />
            </Stack>
          </div>
        </div>

        {/*  */}
      </Stack>
    </div>
  );
};

export default Display;
