import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between my-5">
            <h1 className="sm:text-xl font-bold text-lime-700">Lunch Menu Management</h1>
            <div className="flex sm:flex-row flex-col sm:gap-5 text-lime-500 ">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;