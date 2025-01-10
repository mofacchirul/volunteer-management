import { useLoaderData } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";


const MyPost = () => {
  const datas = useLoaderData();

  if (datas.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No volunteer need posts found. Add a new post to manage here.
      </p>
    );
  }

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Img</th>
                <th>postTitle</th>
                <th>PostTitle </th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1} </th>
                  <th>
                    <img className="w-12 h-12 rounded-full" src={data.thumbnail} alt="" />
                  </th>
                  <td>{data.volunteerName}</td>
                  <td>{data.postTitle}</td>
                  <td>{data.appliedAt}</td>
                  <td>{data.company}</td>
                  <th>
                    <button  className="btn btn-ghost text-3xl">
                      <FaDeleteLeft />
                    </button>
                    <Link to="/update">
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
    </div>
  );
};

export default MyPost;
