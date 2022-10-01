import "../styles/Navbar.css"
import {NavLink} from "react-router-dom";
import {useContext, useState} from "react";
import FundingContext from "../context/FundingContext";

export default function Navbar() {
    const [term, setTerm] = useState("");
    const {getFunding} = useContext(FundingContext);

    function onSearch(){

        getFunding(term);
    }



    return (
        <div className="navbar">
            <div>
                <input value={term} type="text" onChange={(event)=> {
                    setTerm(event.target.value)
                }} placeholder="Search with Fund Name and Tickers"/>
                <button onClick={onSearch}>Search</button>
            </div>

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