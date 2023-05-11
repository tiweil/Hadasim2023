import { NavLink } from "react-router-dom";
import "./Header.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
