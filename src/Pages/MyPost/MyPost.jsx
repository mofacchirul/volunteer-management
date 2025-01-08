import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/Provider";
import UserAxios from "../../Hook/Axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const AxiosSecur = UserAxios()

  useEffect(() => {
    if (user?.email) {
        AxiosSecur.get(`/myPosts?email=${user.email}`)
        .then((res) => {
          setPosts(res.data);
         
        })
        .catch((error) => {
          toast.error("Failed to load posts.");
      
        });
    }
  }, [user.email]);

  
const handleDelete =(postId)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    })
    .then((result) => {
        if (result.isConfirmed) {
            AxiosSecur.delete(`/myPosts?email=${postId}`)
               
                .then(res => {
                    if (res.data.deletedCount) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        setPosts(post => post.filter(item => item._id !== postId));
                    }
                })
                .catch(error => console.error("Error deleting application:", error));
        }
    });

}
 
  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No volunteer need posts found. Add a new post to manage here.
      </p>
    );
  }

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">My Volunteer Posts</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Volunteers Needed</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td className="border border-gray-300 px-4 py-2">{post.title}</td>
              <td className="border border-gray-300 px-4 py-2">{post.category}</td>
              <td className="border border-gray-300 px-4 py-2">{post.volunteersNeeded}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to='/add_Volunteer'><button  >
                  Update
                </button></Link>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPost;
