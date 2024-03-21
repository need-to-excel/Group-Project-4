import React, {useState} from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, Outlet,  
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Explore from './pages/explore';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Events from './pages/events';
import './App.css';
import Profiles, { loader as profilesLoader, action as profilesAction } from './Components/Profile/Profiles';
import Profile, {loader as profileLoader,} from './Components/Profile/Profile';
import Edit, {action as editAction,} from './Components/Profile/Edit';
import { action as destroyAction } from './Components/Profile/Destroy';

function Layout() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
      <>
        <Navbar loggedIn={loggedIn} />
        <Outlet />       
      </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout/>,    
    children: [  
      {
        path: '/',
        element: <Home />
      },
      {
        path: "signup", 
        element: <Signup />
      },
      {
        path: "login", 
        element: <Login />
      },
      {
        path: "explore", 
        element: <Explore />
      },
      {
        path: "events", 
        element: <Events />
      },
      {
        path: "profiles", 
        element: <Profiles />,
        loader: profilesLoader,
        action: profilesAction,
      },
      {
        path: "profiles/:profileId", 
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: "profiles/:profileId/edit", 
        element: <Edit />,
        loader: profileLoader,
        action: editAction,
      },
      {
        path: "profiles/:profileId/destroy", 
        action: destroyAction,
      },  
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
