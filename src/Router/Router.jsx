 import { createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPages from "../Error/ErrorPages";
import Home from "../components/Home";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
        {
            path:"/", 
            element:<Home></Home>
        }
    ],
    errorElement:<ErrorPages/>
  },
]);

export default router;
