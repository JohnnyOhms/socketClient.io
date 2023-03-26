import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IemitObject, Istate } from "../type";

const initialState: Istate = {
  Events: [],
  emitEvent: [],
  onEvent: [],
  isConnected: false,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    emitEventFunc: (state, action) => {
      const emitObj: IemitObject = {
        type: "emit",
        name: action.payload.emitName,
        content: JSON.parse(action.payload.data),
        time: new Date(),
        data: action.payload.data,
      };
      state.emitEvent.push(emitObj);
    },

    onEventFunc: () => {},
    displayEvents: (state, action) => {
      if (!state.isConnected) {
        return;
      }
      state.Events = [...state.Events, ...state.emitEvent, ...state.onEvent];
    },
  },
});

export default mainSlice.reducer;
