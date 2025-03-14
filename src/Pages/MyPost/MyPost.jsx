import { useLoaderData } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const MyPost = () => {
  const loadedData = useLoaderData() || [];
  const [datas, setDatas] = useState(loadedData); // Local State for UI Update

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/Volunteers_apply/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });

              // Update UI without refresh
              const updatedData = datas.filter((data) => data._id !== id);
              setDatas(updatedData);
            }
          })
          .catch((error) => console.error("Error deleting:", error));
      }
    });
  };

  if (datas.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No volunteer need posts found. Add a new post to manage here.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Img</th>
              <th>Volunteer Name</th>
              <th>Post Title</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <th>
                  <img className="w-12 h-12 rounded-full" src={data.thumbnail} alt="thumbnail" />
                </th>
                <td>{data.volunteerName}</td>
                <td>{data.postTitle}</td>
                <td>{data.company}</td>
                <th>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-ghost text-3xl"
                  >
                    <FaDeleteLeft />
                  </button>
                  <Link to={`/update/${data._id}`}>
                    <button className="btn btn-ghost text-3xl">
                      <MdBrowserUpdated />
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
