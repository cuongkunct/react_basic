import React, { useState } from "react";
import SeatGrid from "../component/OderSeatPage/SeatGrid.jsx";
import { setBookingInfor, setBookingSeat } from "../redux/slice.js";
import { useDispatch, useSelector } from "react-redux";

export default function OrderSeats() {
  const [bookedSeats, setBookedSeats] = useState({ name: "", numSeats: 0 });
  const [error, setError] = useState({ name: "", numSeats: "" });
  const data = useSelector((state) => state.orderSeatsSlice);
  const { startSelect, selectSeats, reservedSeats } = data;

  const dispatch = useDispatch();

  const handleStartSelecting = () => {
    dispatch(setBookingInfor(bookedSeats));
  };
  const handleUpdateBookedSeats = () => {
    if (selectSeats.length !== parseInt(bookedSeats.numSeats)) {
      alert(
        `Please select exactly ${bookedSeats.numSeats} seats before booking.`
      );
      return;
    }
    dispatch(setBookingSeat(selectSeats));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn reload trang

    if (!bookedSeats.name.trim()) {
      setError((prev) => ({ ...prev, name: "Name is required" }));
    } else {
      setError((prev) => ({ ...prev, name: "" }));
    }
    if (bookedSeats.numSeats <= 0) {
      setError((prev) => ({
        ...prev,
        numSeats: "Number of seats must be greater than 0",
      }));
    } else {
      setError((prev) => ({ ...prev, numSeats: "" }));
    }
    handleStartSelecting();
  };

  return (
    <div className="min-h-screen w-full bg-[url('/img/bg-movi.jpg')] bg-cover bg-center bg-fixed text-center px-2 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
      <div className="flex justify-center">
        <div className="mt-8 w-[80%] border border-gray-500 backdrop-blur-sm bg-white/30 rounded-lg p-4">
          <h1 className="font-bold text-2xl">Movie Seat Selection</h1>{" "}
          <p>fill the required details below and select your seats</p>
          <form
            onSubmit={handleSubmit}
            className="flex sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-4"
          >
            <div className="flex flex-col mt-4">
              <label className="text-left font-semibold mb-2">Name*</label>
              <input
                onChange={(e) =>
                  setBookedSeats({ ...bookedSeats, name: e.target.value })
                }
                type="text"
                disabled={startSelect.name !== ""}
              />
              {error.name && <div className="text-red-600">{error.name}</div>}
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-left font-semibold mb-2">
                {" "}
                Number of Seats*
              </label>
              <input
                onChange={(e) =>
                  setBookedSeats({ ...bookedSeats, numSeats: e.target.value })
                }
                type="number"
                disabled={startSelect.numSeats > 0}
              />
              {error.numSeats && (
                <div className="text-red-600">{error.numSeats}</div>
              )}
            </div>
            <button
              type="submit"
              className="mt-12 border bg-red-600 text-white p-2 rounded-md hover:bg-red-900"
            >
              Start Selecting
            </button>
          </form>
          <div className="flex  items-center gap-4 mt-4">
            <div className="flex justify-center items-center gap-2">
              <p className="w-4 h-4 bg-red-600 border border-amber-50"></p>
              <p>Selected Seat</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="w-4 h-4 bg-black border border-amber-50"></p>
              <p>Reserved Seat</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <p className="w-4 h-4 bg-white border border-gray-600"></p>
              <p>Empty Seat</p>
            </div>
          </div>
          <p className="bg-amber-400 m-4">Please Select your Seats NOW!</p>
          <SeatGrid />
          <button
            onClick={handleUpdateBookedSeats}
            className="mt-8 mb-4 border bg-green-600 text-white py-2 px-24 rounded-md hover:bg-green-900"
            disabled={reservedSeats.length > 0}
          >
            {" "}
            Book Seats
          </button>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-200">Name</th>
                <th className="border p-2 bg-gray-200">Selected Seats</th>
                <th className="border p-2 bg-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {reservedSeats.map((seat) => (
                <tr key={seat.id}>
                  <td className="border p-2">{seat.name}</td>
                  <td className="border p-2">{seat.id}</td>
                  <td className="border p-2">
                    {seat.status ? "Selected" : "Not Selected"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
