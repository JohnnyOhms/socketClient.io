import { createSlice } from "@reduxjs/toolkit";
import { IemitObject, IonEventObj, Istate } from "../type";
import { io } from "socket.io-client";
import currentDate from "../newDate";

const initialState: Istate = {
  socket: null,
  Events: [],
  emitEvent: [],
  onEvent: [],
  isConnected: false,
  onEventItems: null,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    connectSocket: (state, action) => {
      state.socket = io(action.payload);
      state.isConnected = true;
      // mainSlice.caseReducers.isConnected(state, action);
      // if (state.socket.connected) {
      //   state.isConnected = true;
      // } else {
      //   state.isConnected = false;
      // }
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
    onEventFunc: (state, action) => {
      if (!state.isConnected) return;
      if (
        state.socket._callbacks !== null &&
        // action.payload in state.socket._callbacks
        state.socket._callbacks.hasOwnProperty(action.payload)
      ) {
        return alert("callback obj found");
      }
      state.socket.on(action.payload, (data: any) => {
        const onObj: IonEventObj = {
          type: "on",
          name: action.payload,
          content: data,
          time: currentDate(),
        };
        alert(data);
        state.onEvent.push(onObj);
        mainSlice.caseReducers.displayEvents(state, action);
      });

      // if (state.onEventItems) {
      //   for (let i = 0; i < state.onEventItems[0].length; i++) {
      //     const onItems = state.onEventItems[i];
      //     // state.socket = io(action.payload);
      //     // const callbacks: { [key: string]: any } = state.socket._callbacks;
      //     // callbacks.state.onEventItems[i] = [];
      //     state.socket.on(onItems, (data: any) => {
      //       const onObj: IonEventObj = {
      //         type: "on",
      //         name: onItems,
      //         content: data,
      //         time: currentDate(),
      //       };
      //       state.onEvent.push(onObj);
      //       mainSlice.caseReducers.displayEvents(state, action);
      //     });
      //   }
      // }
    },
    displayEvents: (state, action) => {
      // if (!state.isConnected) return;
      state.Events = [...state.Events, ...state.emitEvent, ...state.onEvent];
      return { ...state };
    },
    isConnected: (state, action) => {
      state.socket.emit("joined", true);
    },
    updateOnEventItems: (state, action) => {
      state.onEventItems = [];
      if (state.onEventItems) {
        state.onEventItems = [...state.onEventItems, action.payload];
      }
    },
  },
});

export const { emitEventFunc, connectSocket, updateOnEventItems, onEventFunc } =
  mainSlice.actions;

export default mainSlice.reducer;
