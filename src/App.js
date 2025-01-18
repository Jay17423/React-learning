import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body  from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About  from "./components/About";
import Error from "./Error";
import Contact from "./components/Contact";
import ResturantMenu from "./ResturantMenu";
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/UserContext";
    

   const Instamart = lazy( () => import("./components/Instamart"));
   const AppLayout = () =>{
    const [user,setUser] = useState({
      name : "Jay Prakash",
      email : "jayprakash1200@gmail.com"
    });
   return (
    <>
    <UserContext.Provider value = {{
      user : user,
      setUser : setUser,
    }}>
    <Header/>
    <Outlet/>
    <Footer/> 
    </UserContext.Provider>
    </>
   ) 
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement : <Error></Error>,
      children : [
        {
          path: "/About",
          element: <About/> 
        },
        {
          path: "/Contact",
          element: <Contact/> 
        } ,
        {
          path: "/",
          element: <Body user ={{
            name : "Jay prakash",
            email :" jaypraksh@gmail.com",
            phone : "7023499003"
          }} /> 
        },
        {
          path: "/resturant/:id",
          element: <ResturantMenu/> 
        },
        {
          path: "/instamart",
          element:<Suspense fallback={<Shimmer/>}>
                  <Instamart/>
                  </Suspense> 
        }     
      ]
    },
   
  ])  

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);  we will not render AppLayout every time we have to render the component  accordingly so 
root.render(<RouterProvider router={appRouter} />) 