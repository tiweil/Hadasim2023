import { NavLink } from "react-router-dom";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className='header'>
                <NavLink to="/">Home</NavLink>
                <span> | </span>
                <NavLink to="/Add">Add</NavLink>
            </div>

        </div>
    );
}

export default Header;
