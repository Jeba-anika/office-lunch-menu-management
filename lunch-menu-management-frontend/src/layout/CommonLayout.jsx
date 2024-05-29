import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const CommonLayout = () => {
    return (
        <div>
            <Header />

            <div className="min-h-screen">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default CommonLayout;