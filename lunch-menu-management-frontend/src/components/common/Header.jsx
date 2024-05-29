import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { auth, setAuth } = useAuth()
    return (
        <div className="flex justify-between my-5">
            <Link to='/' className="sm:text-xl font-bold text-lime-700">Lunch Menu Management</Link>
            <div className="flex sm:flex-row flex-col sm:gap-5 text-lime-500 ">
                <Link to='/'>Home</Link>
                {
                    auth && auth?.data?.email && auth?.token ? <button onClick={() => {
                        console.log(auth)
                        setAuth({})
                    }}>Logout</button> : <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;