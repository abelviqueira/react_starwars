import React, {useState} from 'react';

const Context = React.createContext({})

export function CharactersContentProvider({children}) {
    const [character, setCharacter] = useState([]);
    
    return <Context.Provider value={{character, setCharacter}} >
        {children}
    </Context.Provider>
}
export default Context;