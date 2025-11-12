import { configureStore } from "@reduxjs/toolkit";
import orderSeatsSlice from "../redux/slice";
export const store = configureStore({
  reducer: { orderSeatsSlice },
});
