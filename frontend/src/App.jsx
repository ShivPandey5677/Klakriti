import React, { useContext } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import Navbar from './components/Navbar'
import HeroPage from './pages/Hero'
import Footer from './components/Footer'
import ProductDisplay from './pages/ProductDisplay'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BiddingPage from './pages/BiddingPage';
import Addproduct from './pages/addproduct';
import SlidingImages from './pages/SlidingImages';
import { AuthContext } from './context/authContext';

// import { Home } from 'lucide-react';







const App = () => {
  const {currentUser}=useContext(AuthContext);
  const queryClient=new QueryClient();
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/register" />;
    }
    return children;
  };
  const Layout=()=>{
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <Navbar/>
        <Outlet/>
      
      </div>
      </QueryClientProvider>
    )
  }
  const router=createBrowserRouter([{
 path:"/",
 element: (
  <ProtectedRoute>
    <Layout />
  </ProtectedRoute>
),
 children:[
{
  path:"/",
  element:<Home/>
},
{
  path:"/shop",
  element:<ProductDisplay/>
},
{
  path:"/bid",
  element:<BiddingPage/>
},
{
  path:"/AddProduct",
  element: <Addproduct/>
},
{
  path:"/stories",
  element:<SlidingImages />
}
 ]
 },
{
  path:"/login",
  element:<Login/>
} ,
{
  path:"/register",
  element:<Register/>,
},

])
  return (
    <div>
 <RouterProvider router={router}/>
 
    </div>
  )
}

export default App
