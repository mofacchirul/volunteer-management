import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange, MdOutlineVolunteerActivism } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import VolunteerForm from "../VolunteerForm/VolunteerForm";
 // Import the form component

const View_Details = () => {
  const data = useLoaderData(); // Load volunteer post data
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-6"
    >
      <div className="relative">
        <img
          src={data.thumbnail}
          alt={data.postTitle}
          className="w-full h-96 p-2 rounded-2xl object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h1 className="text-info text-2xl font-bold">{data.postTitle}</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm mt-2 flex items-center gap-3">
            <MdDateRange className="text-2xl text-info" />
            <strong className="text-info">Deadline:</strong> {new Date(data.deadline).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">
          <span className="font-semibold text-2xl">Description:</span> {data.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-2xl text-info" />
            <div>
              <strong>Location:</strong>
              <p>{data.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <BiSolidCategoryAlt className="text-2xl text-info" />
            <div>
              <strong>Category:</strong>
              <p>{data.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineVolunteerActivism className="text-2xl text-info" />
            <div>
              <strong>Volunteers Needed:</strong>
              <p>{data.volunteersNeeded}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GoOrganization className="text-2xl text-info" />
            <div>
              <strong>Organizer:</strong>
              <p>{data.organizer.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <IoIosContact className="text-2xl text-info" />
            <div>
              <strong>Contact Email:</strong>
              <p>{data.organizer.email}</p>
            </div>
          </div>
        </div>
        <button className="btn btn-info mt-4" onClick={() => setShowModal(true)}>
          Be a Volunteer
        </button>
      </div>

      {/* Modal for Volunteer Form */}
      {showModal && (
        <VolunteerForm
          postData={data}
          userData={{ name: "John Doe", email: "john.doe@example.com" }} // Replace with actual user data from auth
          onClose={() => setShowModal(false)}
        />
      )}
    </motion.div>
  );
};

export default View_Details;
