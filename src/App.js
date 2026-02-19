import {
  createBrowserRouter,
  //createRoutesFromElements,
  //Route,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Root } from "./pages/Root";
import { Error } from "./pages/Error";
import { Productdetails } from "./pages/Productdetails";

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>,
// );

//const router = createBrowserRouter(routeDefination);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error/>,
    children: [
      {index:true, path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      {path:'products/:productId', element:<Productdetails/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
