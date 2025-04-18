import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")))

    return (<UserContext.Provider value={[user, setUser]}>
        {children}
    </UserContext.Provider>)
}