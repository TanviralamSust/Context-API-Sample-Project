// import {useFund} from "../context/FundContext";



import {useContext} from "react";
import FundingContext from "../context/FundingContext";
import "../styles/Home.css"

export default function Home() {

    const {funding, loading} = useContext(FundingContext);

    return loading?<div>... Loading</div> : (
        <div className="homeContainer">
            {
                funding.map((fund, index)=> (
                    <div className="fundContainer" key={index}>
                        <span className="fundItem">{fund.id}</span>
                        <span className="fundItem">{fund.name}</span>
                        <span className="fundItem">{fund.exchange}</span>
                        <span className="fundItem">{fund.ticker}</span>
                    </div>
                ))
            }
        </div>
    )
}