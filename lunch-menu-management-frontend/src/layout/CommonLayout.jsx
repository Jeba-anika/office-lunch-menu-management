import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const CommonLayout = () => {
    return (
        <div>
            <Header />
            <>
                <Outlet />
            </>
            <Footer />
        </div>
    );
};

export default CommonLayout;