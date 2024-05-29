import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between">
            <h1>LMM</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;