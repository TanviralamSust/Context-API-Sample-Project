import React, {useEffect, useState} from "react";
import {useContext} from "react";
import axios from "axios";

const FundContext = React.createContext();

export function useFund(){
    return useContext(FundContext)
}

export  function FundProvider({children}){
    const [loading, setLoading] = useState(false);
    const [fundList, setFundList] = useState([]);

    useEffect(()=> {
        getFunds("GET","https://jsonplaceholder.typicode.com/posts",{});
    })

    async function getFunds(method, url, payload) {
        setLoading(true)
        try{
            const response = await axios.request({
                data: payload,
                method,
                url
            })
            setFundList(response.data);
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }



    const value = {
        fundList,
        getFunds
    }
    return(
        <FundContext.Provider value={value}>
            {!loading && children}
        </FundContext.Provider>
    )

}