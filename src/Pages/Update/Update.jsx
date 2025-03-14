import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const Update = () => {
    const {user}= useContext(AuthContext)
    console.log(user);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const UpdateData = {
        thumbnail: data.thumbnail,  
        description: data.description,
        category: data.category,
        location: data.location,
        volunteersNeeded: parseInt(data.volunteersNeeded, 10),
        deadline: data.deadline,
        volunteerName:user.email,
        volunteerEmail: user.displayName,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        
      };
       fetch("http://localhost:5000/Volunteers_apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UpdateData),
        })
       .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire(
                "Volunteer Successful",
                "Your request has been confirmed!",
                "success"
              );
            }
          })
          .catch((err) => {
         
            Swal.fire(
              "Error",
              "There was a problem submitting your request. Please try again later.",
              "error"
            );
          });
      
  };

  return (
    <div className="add-volunteer-post max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL:</label>
          <input
            type="text"
            name="thumbnail"
            placeholder="Enter thumbnail URL"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Post Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter post title"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            placeholder="Enter description"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category:</label>
          <select
            name="category"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social service">Social Service</option>
            <option value="animal welfare">Animal Welfare</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">No. of Volunteers Needed:</label>
          <input
            type="number"
            name="volunteersNeeded"
            placeholder="Enter number of volunteers needed"
            min="1"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Deadline:</label>
          <input
            type="date"
            name="deadline"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Organizer Name:</label>
          <input
            type="text"
            name="organizerName"
            value={user.displayName}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Organizer Email:</label>
          <input
            type="email"
            name="organizerEmail"
            value={user.email}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Update;
