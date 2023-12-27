'use client'
import { useState ,createContext } from "react";

export const AndAgainContext = createContext({})

export const ContextProvider = ({
    children,
}) => {

const [ andAgain, setAndAgain ] = useState(false) 

    return (
           
   <AndAgainContext.Provider value={{ andAgain, setAndAgain }}>
            {children}
   </AndAgainContext.Provider>

    );
};