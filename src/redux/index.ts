import { configureStore } from "@reduxjs/toolkit";
import Theme from "./theme";
const store = configureStore({
  reducer: {
    Theme,
  },
});
export default store;
