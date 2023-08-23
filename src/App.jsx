import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder, {
  action as CreateorderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./UI/AppLayout";
import Error from "./UI/Error";
import {action as updateOrderAction} from "./features/order/updateOrder";
import { loader as orderLoader } from "./features/order/Order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateorderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action:updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
