import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectSeats } from "../../redux/slice.js";
export default function SeatGrid() {
  const data = useSelector((state) => state.orderSeatsSlice);
  const { seatsList, rows, seatsPerRow, startSelect, selectSeats } = data;
  const { name, numSeats } = startSelect;

  console.log("SeatGrid - startSelect:", selectSeats);

  const dispatch = useDispatch();

  const handleSelectSeat = (seatId) => {
    dispatch(setSelectSeats(seatId));
  };

  const handleCheckboxChange = () => {
    if (numSeats <= 0) {
      console.log("No seats can be selected.");
    } else {
      console.log("Seats can be selected.");
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-200">Row</th>
            {[...Array(seatsPerRow)].map((_, i) => (
              <th key={i} className="border p-2 bg-gray-200">
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <td className="border p-1 bg-gray-100 font-bold">{row}</td>
              {seatsList
                .filter((seat) => seat.id.startsWith(row))
                .map((seat) => {
                  let check = selectSeats.find((s) => s.id === seat.id);
                  const isChecked = check ? check.status : false;

                  const isDisabled =
                    !isChecked && selectSeats.length >= numSeats; // disable nếu đủ ghế

                  return (
                    <td key={seat.id} className="border p-1 text-center">
                      <input
                        type="checkbox"
                        onClick={handleCheckboxChange}
                        checked={isChecked}
                        disabled={isDisabled}
                        onChange={() => handleSelectSeat(seat.id)}
                        className={`p-6 border-2 cursor-pointer ${
                          isChecked ? "bg-green-300" : "border-red-600"
                        }`}
                      />
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
