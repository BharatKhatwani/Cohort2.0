import React, { useState, createContext } from 'react';

// Create the context
const UserContext = createContext();

// Create the provider component
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
