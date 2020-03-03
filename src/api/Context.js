import React, { createContext, useState } from 'react';
const Context = React.createContext();

const Provider = ({children}) => {
	const [characters, setCharacters] = useState([]);
    
    const value = {
        characters,
        updateCharacters: (data) => {
            setCharacters(data)
        }
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}