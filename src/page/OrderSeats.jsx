import React from "react";

export default function OrderSeats() {
  return (
    <div className="min-h-screen w-full bg-[url('/img/bg-movi.jpg')] bg-cover bg-center bg-fixed text-center px-2 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]">
      <div className="flex justify-center">
        <div className="mt-8 w-[80%] border border-gray-500 backdrop-blur-sm bg-white/30 rounded-lg p-4">
          <h1 className="font-bold text-2xl">Movie Seat Selection</h1>{" "}
          <p>fill the required details below and select your seats</p>
          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-4">
            <div className="flex flex-col mt-4">
              <label className="text-left font-semibold mb-2">Name*</label>
              <input type="text" required />
              <span></span>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-left font-semibold mb-2">
                {" "}
                Number of Seats*
              </label>
              <input type="number" required />
              <span></span>
            </div>
            <button className="mt-12 border bg-red-600 text-white p-2 rounded-md hover:bg-red-900">
              Start Selecting
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
}
