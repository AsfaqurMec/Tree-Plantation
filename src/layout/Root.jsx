import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className='w-full'>

        
        <Navbar ></Navbar>

        <div className='w-full'>
           <Outlet></Outlet>
        </div>
        
        
        <Footer></Footer>
        
    </div>
    );
};

export default Root;