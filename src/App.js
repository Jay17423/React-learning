import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ResturantMenu from "./ResturantMenu";
import Cart from "./components/Cart";
import Error from "./Error";
import Shimmer from "./components/Shimmer";
import Delivery from "./components/Delivery";
// Context and Redux
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

// Lazy loaded component
const Instamart = lazy(() => import("./components/Instamart"));

// Main layout
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Jay Prakash",
    email: "jayprakash1200@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // This handles route errors
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Jay Prakash",
              email: "jaypraksh@gmail.com",
              phone: "7023499003",
            }}
          />
        ),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "delivery",
        element: <Delivery />,
      },
      {
        path: "resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*", // catch-all route for unknown URLs
        element: <Error />,
      },
    ],
  },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
