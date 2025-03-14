import { useLoaderData } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const MyPost = () => {
  // 🟢 Step 1: Data Load & Ensure Array
  const loadedData = useLoaderData() || [];
  console.log("Loaded Data:", loadedData); // Debugging Check
  
  const [datas, setDatas] = useState(Array.isArray(loadedData) ? loadedData : []);

  useEffect(() => {
    if (Array.isArray(loadedData)) {
      setDatas(loadedData);
    } else {
      setDatas([]); // Prevents the map error
    }
  }, [loadedData]);

  // 🗑️ Delete Function
  const handleDelete = (id) => {
    console.log(id);
    
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
        axios.delete(`https://assignment-11-server-side-mu-ten.vercel.app/Volunteers_apply/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              
              const updatedData = datas.filter((data) => data._id !== id);
              setDatas(updatedData);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Could not delete the post. Try again.",
                icon: "error",
              });
            }
          })
          .catch((error) => console.error("Error deleting:", error));
      }
    });
  };

  // 🛑 Step 2: Handle Empty Data
  if (!Array.isArray(datas) || datas.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No volunteer need posts found. Add a new post to manage here.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
        <Helmet>
                <meta charSet="utf-8" />
                <title> Volunteer | My Post </title>
                
            </Helmet>
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
