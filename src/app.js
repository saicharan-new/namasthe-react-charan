import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestraurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//chunking
//code splitting
//Dynamic Bundling
//Lazy loading
//on demand loading
// dynamic import  --> it may take long time to load the screen if our app is big in size we use
// lazy function to take out the chunk of functionalities to reduce the load on the browser and also it will load data when required.

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    // authentation
    ///api call
    const data = {
      name:"Sai Charan",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestraurantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
