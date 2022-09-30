import React from "react";
import {useContext} from "react";

const FundContext = React.createContext();

export function useFund(){
    return useContext(FundContext)
}

export  function FundProvider({children}){


    const value = {

    }
    return(
        <FundContext.Provider value={value}>
            {children}
        </FundContext.Provider>
    )

}