import React, { createContext } from 'react';
const myContaxt = createContext(null)
const Contaxt = ({children}) => {

    const AuthInfo = {}
    return (
        <myContaxt.Provider value={AuthInfo}>
            {children}
        </myContaxt.Provider>
    );
};

export default Contaxt;