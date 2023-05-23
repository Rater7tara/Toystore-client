import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import AllToys from "../components/AllToys/AllToys";
import SingleToy from "../components/AllToys/SingleToy";
import ToyTable from "../components/AllToys/ToyTable";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import AddAToy from "../components/PrivateRoute/AddAToy/AddAToy";
import MyToys from "../components/PrivateRoute/MyToys/MyToys";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UpdateToy from "../components/PrivateRoute/UpdateToy/UpdateToy";
import ErrorPage from "../layout/ErrorPage";
import LoginLayout from "../layout/LoginLayout";
  



const router = createBrowserRouter([
    {
      path:'/',
      element: <LoginLayout></LoginLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Navigate to="/home"></Navigate>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
          loader: () => fetch('https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys'),
        },
        {
          path: "/addAToy", 
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path: "/allToys",
          element: <AllToys></AllToys>,
          loader: () => fetch('https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys'),
        },
        {
          path: "myToys/updateToy/:id", 
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${params.id}`),
        },
        {
          path: "/myToys", 
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        },
        {
          path: "/singleToy/:id", 
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-server-ec7c-du1uro2ur-rater7tara.vercel.app/allToys/${params.id}`),
        },
        {
          path: "/blog", 
          element: <Blog></Blog>
          
        }
      ]
    },
    
    
  ]);

  export default router;