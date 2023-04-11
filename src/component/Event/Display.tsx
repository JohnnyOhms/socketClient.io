import { useEffect, useState, useRef } from "react";
import { Stack } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useAppSelector } from "../../hooks/hooks";
import { emitEvents } from "../../type";

const Display = () => {
  const value = 12345;
  const events = useAppSelector((state) => state.main.emitEvent);
  const [displayData, setdisplayData] = useState<emitEvents>([]);
  const scrollRef = useRef();

  useEffect(() => {
    setdisplayData(events);
  }, [events]);
  return (
    <div className="display-section">
      <div className="btn-emit" style={{ width: "70%" }}>
        <button className="emit-btn">Clear</button>
      </div>
      <hr />
      <Stack
        width="100%"
        sx={{
          marginTop: "10px",
          display: "flex",
          maxHeight: { xs: "180px", sm: "250px", md: "100%" },
        }}
      >
        {displayData &&
          displayData.map((item, index) => {
            return (
              <div className="align-mssg" key={index}>
                <span
                  style={{
                    visibility: "hidden",
                  }}
                >
                  aligned_hidden
                </span>
                <div className="display-mssg">
                  <Stack sx={{ height: "70px", padding: "4px 7px" }}>
                    <p style={{ fontStyle: "italic" }}>
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontStyle: "normal",
                        }}
                      >
                        Date:{" "}
                      </span>
                      {item.time}
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontStyle: "normal",
                        }}
                      >
                        Emit:{" "}
                      </span>
                      {item.name}
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontStyle: "normal",
                        }}
                      >
                        Data:{" "}
                      </span>
                      {item.data}
                    </p>
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
