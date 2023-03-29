import { createSlice } from "@reduxjs/toolkit";
import { IemitObject, Istate } from "../type";
import { io } from "socket.io-client";

const initialState: Istate = {
  socket: null,
  Events: [],
  emitEvent: [],
  onEvent: [],
  isConnected: false,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    connectSocket: (state, action) => {
      state.socket = io(action.payload);
      // mainSlice.caseReducers.isConnected(state, action);
      state.socket.on("disconnected", () => console.log("disconect"));
      if (state.socket.connected) {
        state.isConnected = true;
      } else {
        state.isConnected = false;
      }
    },
    emitEventFunc: (state, action) => {
      const emitObj: IemitObject = {
        type: "emit",
        name: action.payload.emitName,
        content: JSON.parse(action.payload.content),
        time: action.payload.time,
        data: action.payload.data,
      };
      state.emitEvent.push(emitObj);
      mainSlice.caseReducers.displayEvents(state, action);
      if (!state.isConnected) return;
      const { name, content, data } = emitObj;
      state.socket.emit(name, { name, content, data });
    },

    onEventFunc: () => {},
    displayEvents: (state, action) => {
      // if (!state.isConnected) {
      //   return;
      // }
      state.Events = [...state.Events, ...state.emitEvent, ...state.onEvent];
      return { ...state };
    },
    isConnected: (state, action) => {
      state.socket.emit("joined", true);
    },
  },
});

export const { emitEventFunc, connectSocket } = mainSlice.actions;

export default mainSlice.reducer;
