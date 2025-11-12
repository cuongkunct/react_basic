import { createSlice } from "@reduxjs/toolkit";

const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seatsPerRow = 12;

const initialState = {
  seatsList: rows.flatMap((row) =>
    Array.from({ length: seatsPerRow }, (_, i) => ({
      id: `${row}${i + 1}`,
      row,
      number: i + 1,
      status: "available",
    }))
  ),
  rows: rows,
  seatsPerRow: seatsPerRow,
  startSelect: { name: "", numSeats: 0 },
  selectSeats: [],
};

export const orderSeatsSlice = createSlice({
  name: "orderSeats",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      console.log("Selecting seat:", action.payload);
      const seatId = action.payload;
      const exist = state.selectSeats.find((seat) => seat.id === seatId);
      if (exist) {
        // nếu đã chọn rồi thì bỏ chọn
        state.selectSeats = state.selectSeats.filter(
          (seat) => seat.id !== seatId
        );
      } else {
        // nếu chưa chọn thì thêm vào
        state.selectSeats.push({ id: seatId, status: true });
      }
    },

    startSelect: (state, action) => {
      console.log("Starting selection with:", action.payload);
      state.startSelect = action.payload;
    },
  },
});
export const { selectSeat, startSelect } = orderSeatsSlice.actions;
export default orderSeatsSlice.reducer;
