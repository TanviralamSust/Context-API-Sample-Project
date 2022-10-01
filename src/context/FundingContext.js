import {createContext, useEffect, useState} from "react";
import axios from "axios";

const FundingContext = createContext();

export function FundingProvider({children}) {
    const [funding, setFunding] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        getFunding("");
    },[])

    // async function fetchFunding  ()  {
    //     try{
    //         const response = await axios.get("http://localhost:3009/api/v1/funds");
    //         setFunding(response.data);
    //         setLoading(false);
    //         setError(false);
    //     }catch (err) {
    //         setLoading(false);
    //         setError(true);
    //     }
    // }
    async function getFunding  (term)  {
        try{
            const response = await axios.get("http://localhost:3009/api/v1/funds", (term !== ""? {params: {term: term}}: {}));
            setFunding(response.data);
            setLoading(false);
            setError(false);
        }catch (err) {
            setLoading(false);
            setError(true);
        }
    }


    const value = {
        funding,
        loading,
        error,
        getFunding
    }
    return(
        <FundingContext.Provider value={value}>
            {children}
        </FundingContext.Provider>
    )
}

export default FundingContext;
