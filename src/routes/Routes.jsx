import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../component/Home/Home";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
       // errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
             
            },
        ]
}    
]);

export default router;