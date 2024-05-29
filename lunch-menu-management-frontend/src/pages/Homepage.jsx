import { Link } from "react-router-dom";
const Homepage = () => {
    return (
        <div className="my-20 h-96 border-2 bg-lime-200 border-lime-700  rounded-xl flex flex-col gap-5 items-center justify-center">
            <h3 className="text-center font-bold sm:text-5xl  text-lime-700"> Choose Your preferred lunch option.</h3>
            <Link to='/employee/menu'><button className="bg-lime-400 border border-lime-700 text-xl px-4 py-2 sm:px-8 sm:py-4 rounded-xl hover:bg-lime-500">Let's go...</button></Link>
        </div>
    );
};

export default Homepage;