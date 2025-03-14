import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const VolunteerForm = ({ postData, userData, onClose }) => {
  const [suggestion, setSuggestion] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = {
      volunteerId: postData._id,
      volunteerName: user.displayName,
      volunteerEmail: user.email,
      suggestion,
      status: "requested",
      appliedAt: new Date(),
      postTitle: postData.postTitle,
      thumbnail: postData.thumbnail,
    };

    fetch("http://localhost:5000/Volunteers_apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Volunteer Successful", "Your request has been confirmed!", "success");
        }
      })
      .catch(() => {
        Swal.fire("Error", "There was a problem submitting your request. Please try again later.", "error");
      });
  };

  return (
    <div className="fixed dark:text-white inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Volunteer Application</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-white">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <img src={postData.thumbnail || ""} alt={postData.postTitle || ""} className="w-full h-48 object-cover rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Post Title", value: postData.postTitle },
              { label: "Category", value: postData.category },
              { label: "Location", value: postData.location },
              { label: "Volunteers Needed", value: postData.volunteersNeeded },
              { label: "Deadline", value: new Date(postData.deadline).toLocaleDateString() },
              { label: "Organizer Name", value: postData.organizer.name },
              { label: "Organizer Email", value: postData.organizer.email },
              { label: "Volunteer Name", value: user.displayName },
              { label: "Volunteer Email", value: user.email },
            ].map((field, index) => (
              <div key={index}>
                <label className="block font-medium mb-1">{field.label}</label>
                <input
                  type="text"
                  value={field.value || ""}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <label className="block font-medium mb-1">Suggestion</label>
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
              rows="4"
              className="w-full border rounded p-2 bg-white dark:bg-gray-700 dark:text-white"
              placeholder="Enter your suggestion or message..."
            ></textarea>
          </div>
          <div className="flex justify-end mt-6 gap-4">
            <button type="submit" className="px-4 py-2 bg-info text-white rounded hover:bg-blue-600">Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
