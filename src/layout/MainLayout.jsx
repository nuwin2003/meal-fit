import Navbar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <main style={{ paddingTop : '85px'}}>
                <Outlet/>
            </main>
        </>
    );
};

export default MainLayout;