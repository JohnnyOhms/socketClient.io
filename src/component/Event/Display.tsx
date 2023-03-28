import { useEffect, useState, useRef } from "react";
import { Stack } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useAppSelector } from "../../hooks/hooks";
import { emitEvents } from "../../type";

const Display = () => {
  const value = 12345;
  const event = useAppSelector((state) => state.main.emitEvent);
  const [emitData, setEmitData] = useState<emitEvents>([]);
  const scrollRef = useRef();

  useEffect(() => {
    setEmitData(event);
  }, [event]);
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
        {emitData &&
          emitData.map((item, index) => {
            return (
              <>
                <div className="align-mssg">
                  <span
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    aligned_hidden
                  </span>
                  <div className="display-mssg" key={index}>
                    <Stack sx={{ height: "70px", padding: "4px 7px" }}>
                      <p>{Date.now()}</p>
                      <p>{item.name}</p>
                      <p>{item.data}</p>
                    </Stack>
                    <Stack>
                      <CodeMirror
                        value={item.content}
                        height="150px"
                        extensions={[javascript({ jsx: true })]}
                        theme="dark"
                        readOnly={true}
                      />
                    </Stack>
                  </div>
                </div>
              </>
            );
          })}

        {/*  */}

        {/* <div className="align-mssg" style={{ flexDirection: "row-reverse" }}>
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
        </div> */}

        {/*  */}
      </Stack>
    </div>
  );
};

export default Display;
