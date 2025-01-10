import React, { useState } from "react";
import Swal from "sweetalert2";

const Add_Volunteer = () => {
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const handleTagsChange = (e) => {
    const value = e.target.value;
    setTags(value);

    // Validate that there are at least 3 tags separated by commas
    const tagArray = value.split(",").filter((tag) => tag.trim() !== "");
    if (tagArray.length < 3) {
      setError("Please enter at least 3 tags separated by commas.");
    } else {
      setError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
  
    // Validate the number of tags
    if (tagArray.length < 3) {
      setError("Please enter at least 3 tags separated by commas.");
      return;
    }
  
    // Gather form data
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
  
    const finalData = {
      thumbnail: initialData.thumbnail,
      postTitle: initialData.postTitle,
      description: initialData.description,
      category: initialData.category,
      location: initialData.location,
      volunteersNeeded: parseInt(initialData.volunteersNeeded, 10),
      deadline: initialData.deadline,
      organizer: {
        name: initialData.organizerName,
        email: initialData.organizerEmail,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "Open",
      tags: tagArray,
    };
  
    setError(""); 
    fetch('https://assignment-11-server-side-mu-ten.vercel.app/Volunteers', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) =>res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
    
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create Volunteer Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter thumbnail URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Post Title</label>
          <input
            type="text"
            name="postTitle"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Describe the event"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter category"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Volunteers Needed</label>
          <input
            type="number"
            name="volunteersNeeded"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter number of volunteers needed"
            min="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Deadline</label>
          <input
            type="date"
            name="deadline"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Organizer Name</label>
          <input
            type="text"
            name="organizerName"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter organizer's name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Organizer Email</label>
          <input
            type="email"
            name="organizerEmail"
            required
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter organizer's email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={handleTagsChange}
            className="mt-1 input input-bordered input-info w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter tags separated by commas"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_Volunteer;
