import { Outlet } from "react-router";
import Navbar from "../components/navbar";


const Root = () => {
    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Root;