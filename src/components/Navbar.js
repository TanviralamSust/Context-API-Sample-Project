import "../styles/Navbar.scss"
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
           <NavLink className={(navInfo)=>
               navInfo.isActive? "nav-items-active": "nav-items"
           } to="/">
               Home
           </NavLink>
           <NavLink className={(navInfo)=>
               navInfo.isActive? "nav-items-active": "nav-items"
           }
               to="/fund-list">
               Fund List
           </NavLink>
        </div>
    )
}