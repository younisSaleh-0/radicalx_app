import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./Pages/login/Login";
import Home from "./Pages/home/Home";
import Sidebar from "./Components/sidebar/Sidebar";
import Internship from "./Components/internship/Internship";
import "./App.scss";
import Jobs from "./Components/jobs/Jobs";
import Apprenticeship from "./Components/apprenticeship/Apprenticeship";
import Settings from "./Components/settings/Settings";
import Dashboard from "./Components/dashboard/Dashboard";
import CreateInternship from "./Components/createIntenship/CreateInternship";

function App() {
  // layout
  const Layout = () => {
    return (
      <div className="app">
        <Sidebar />
        <Outlet />
      </div>
    );
  };

  // create browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/internship",
          element: <Internship />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/createApprenticeship",
      // element: <CreateApprenticeship />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/createInternship",
      element: <CreateInternship />,
    },
    {
      path: "/apprenticeship",
      element: <Apprenticeship />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
