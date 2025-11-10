import { createSlice } from "@reduxjs/toolkit";

export const orderSeatsSlice = createSlice({
  name: "orderSeats",
  initialState: {
    seats: [],
  },
  reducers: {},
});

export default orderSeatsSlice.reducer;
