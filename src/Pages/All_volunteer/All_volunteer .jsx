import React, { useEffect, useState } from "react";
import { MdViewModule, MdViewList } from "react-icons/md";
import Valunteer from "../Home/valunteer";
const All_volunteer = () => {
  const [valunteers, setVolunteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");

  useEffect(() => {
  
    fetch("http://localhost:5000/Volunteers")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  // Search
  const filteredCars = valunteers.filter((valunteer) => {
    return (
      valunteer.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      valunteer.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      valunteer.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className=" max-w-6xl mx-auto  p-5">
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="flex gap-3 items-center">
          <h1 className="lg:text-3xl text-info font-bold">Search By Title:</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <button
            className={`p-2 rounded ${
              view === "grid" ? "bg-info text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setView("grid")}
          >
            <MdViewModule size={24} />
          </button>
          <button
            className={`p-2 rounded ${
              view === "list" ? "bg-info text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setView("list")}
          >
            <MdViewList size={24} />
          </button>
        </div>
      </div>

      <div
         className={`grid gap-5 ${
            view === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          }`}
  
      >
        {filteredCars.map((valunteer) => (
          <Valunteer key={valunteer._id} valunteer={valunteer}></Valunteer>
        ))}
      </div>
    </div>
  );
};

export default All_volunteer;
