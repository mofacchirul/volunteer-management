import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './LayOut/LayOut';
import Home from './Pages/Home/Home';
import All_volunteer from './Pages/All_volunteer/All_volunteer ';
import Resistance from './Pages/Resistace/Resistace';
import Login from './Pages/Login/Login';
import Provider from './Provider/Provider';
import MyPost from './Pages/MyPost/MyPost';
import Add_Volunteer from './Pages/Add_Volunteer/Add_Volunteer';
import View_Details from './Pages/View_Details/View_Details';
import Showall from './Pages/Showall/Showall';

import VolunteerForm from './Pages/VolunteerForm/VolunteerForm';
import PriviteRouter from './Private/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/all_volunteer",
        element:<All_volunteer></All_volunteer>
      },
      {
        path:"/resistance",
        element:<Resistance></Resistance>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/myPost",
        element:<PriviteRouter>
          <MyPost></MyPost>
        </PriviteRouter>
      },
      {
        path:"/add_Volunteer",
        element:<PriviteRouter>
          <Add_Volunteer></Add_Volunteer>
        </PriviteRouter>
      },
      {
        path:'/viewdetails/:id',
        element:<PriviteRouter>
          <View_Details></View_Details>
        </PriviteRouter>,
        loader:({params})=>fetch(`http://localhost:5000/volunteer/${params.id}`),    
      },
      {
        path:'/showall',
        element:<Showall></Showall>
      },
      {
        path:'/VolunteerForm',
        element:<PriviteRouter>
          <VolunteerForm></VolunteerForm>,
        </PriviteRouter>
        
       
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
