 import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPages from "../Error/ErrorPages";
import Home from "../components/Home";
import Login from "../AuthPages/Login";
import Register from "../AuthPages/Register";
import NewsDetils from "../components/NewsDetils";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            path:"/", 
            element:<Home></Home>
        },
      
    ],
    errorElement:<ErrorPages/>,
    
  },
  {
        path:"/login",
        element:<Login/>
    },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/news/:id",
            element:<PrivetRouter>
                <NewsDetils/>
            </PrivetRouter>
        }
]);

export default router;
