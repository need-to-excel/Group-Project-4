// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Signup from './pages/signup';
// import Login from './pages/login';
// import Explore from './pages/explore';
// import './App.css';
// import Home from './pages/home';
// import Map from './Components/Map/Map';
// import Profiles from './Components/Profile/Profiles';
// import Profile from './Components/Profile/Profile';
// import Edit from './Components/Profile/Edit';

// function App() {
//   return (

//     <div>
//       <Navbar />
//       <div className="content">

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/explore" element={<Explore />} />
//           {/* <Route path="/profiles" element={<Profiles />}>
//             <Route path="profile/:profileId" element={<Profile />} />            
//             <Route path="profile/:profileId/edit" element={<Edit />} />
//           </Route> */}
//           <Route path="/profiles" element={<Profiles />} />
//           <Route path="profile/:profileId" element={<Profile />} />            
//           <Route path="profile/:profileId/edit" element={<Edit />} />
          
//           <Route path="/Map" element={<Map />} />
//         </Routes>

//       </div>
//     </div>
//   );
// }


// export default App;


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider, Outlet,  
// } from "react-router-dom";
// import Navbar from './Components/Navbar/Navbar';
// import Signup from './pages/signup';
// import Login from './pages/login';
// import Explore from './pages/explore';
// import './App.css';
// import Home from './pages/home';
// import Map from './Components/Map/Map';
// import Profiles from './Components/Profile/Profiles';
// import Profile from './Components/Profile/Profile';
// import Edit from './Components/Profile/Edit';

// function Layout() {
//   return (
//       <>
//         <Navbar />
//         <Outlet />       
//       </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout/>,    
//     children: [  
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: "signup", 
//         element: <Signup />
//       },
//       {
//         path: "login", 
//         element: <Login />
//       },
//       {
//         path: "explore", 
//         element: <Explore />
//       },
//       {
//         path: "profiles", 
//         element: <Profiles />
//       },
//       {
//         path: "profile/:profileId", 
//         element: <Profile />
//       },
//       {
//         path: "profile/:profileId/edit", 
//         element: <Edit />
//       },      
//       {
//         path: 'Map',
//         element: <Map />
//       }
//     ]
//   }
// ])


// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
