import Products from './components/products/Products'
import Comments from "./components/comments/Comments"
import Users from "./components/users/Users"
import Offs from "./components/offs/Offs"
import Orders from "./components/orders/Orders"


const routes = [
    { path: "/products", element: <Products /> },
    { path: "/comments", element: <Comments /> },
    { path: "/users", element: <Users /> },
    { path: "/orders", element: <Orders /> },
    { path: "/offs", element: <Offs /> },
  ];


  export default routes
  