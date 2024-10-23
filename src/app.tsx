import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import Characters from "./pages/Characters";
import Films from "./pages/Films";
import Home from "./pages/Home";
import Loading from "./component/Loading";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/StarShips";
import Vehicles from "./pages/Vehicles";

const router = createHashRouter([
  {
    path: "/people/:id",
    element: <Characters />,
  },
  {
    path: "/films/:id",
    element: <Films />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/planets/:id",
    element: <Planets />,
  },
  {
    path: "/species/:id",
    element: <Species />,
  },
  {
    path: "/starships/:id",
    element: <Starships />,
  },
  {
    path: "/vehicles/:id",
    element: <Vehicles />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Loading />
    </>
  );
};

export default App;