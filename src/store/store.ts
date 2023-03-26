import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../slice/index";

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});
