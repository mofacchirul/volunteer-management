import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/Provider";

const VolunteerForm = ({ postData, userData, onClose }) => {
  const [suggestion, setSuggestion] = useState("");
  const [submitting, setSubmitting] = useState(false);
const{user}=useContext(AuthContext)


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the application data
    const applicationData = {
      volunteerId: postData._id,
      volunteerName: userData.name,
      volunteerEmail: userData.email,
      suggestion,
      status: "requested",
      appliedAt: new Date(),
    };

    // Basic validation
    if (!userData.email || userData.email === "Not Provided") {
      toast.error("You must be logged in to apply as a volunteer.");
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch("http://localhost:5000/volunteerapply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Request submitted successfully!");
        onClose(); 
      } else {
        toast.error(result.message || "Failed to submit the request.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Volunteer Application</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Thumbnail Image */}
          <div className="mb-4">
            <img
              src={postData.thumbnail}
              alt={postData.postTitle}
              className="w-full h-48 object-cover rounded"
            />
          </div>

          {/* Read-Only Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Post Title */}
            <div>
              <label className="block font-medium mb-1">Post Title</label>
              <input
                type="text"
                value={postData.postTitle}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-1">Category</label>
              <input
                type="text"
                value={postData.category}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                value={postData.location}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Volunteers Needed */}
            <div>
              <label className="block font-medium mb-1">
                Volunteers Needed
              </label>
              <input
                type="number"
                value={postData.volunteersNeeded}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block font-medium mb-1">Deadline</label>
              <input
                type="text"
                value={new Date(postData.deadline).toLocaleDateString()}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Organizer Name */}
            <div>
              <label className="block font-medium mb-1">Organizer Name</label>
              <input
                type="text"
                value={postData.organizer.name}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Organizer Email */}
            <div>
              <label className="block font-medium mb-1">Organizer Email</label>
              <input
                type="email"
                value={postData.organizer.email}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>
          </div>

          {/* User Data (Read-Only) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Volunteer Name */}
            <div>
              <label className="block font-medium mb-1">Volunteer Name</label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>

            {/* Volunteer Email */}
            <div>
              <label className="block font-medium mb-1">Volunteer Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
            </div>
          </div>

          {/* Editable Suggestion Field */}
          <div className="mt-4">
            <label className="block font-medium mb-1">Suggestion</label>
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
              rows="4"
              className="w-full border rounded p-2"
              placeholder="Enter your suggestion or message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6 gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-info text-white rounded hover:bg-blue-600 ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
