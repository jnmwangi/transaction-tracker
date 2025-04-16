import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState({ id: 1, name: "Julius", email: "julius.mwangi" })
    return <UserContext.Provider value={[user, setUser]}>
        {children}
    </UserContext.Provider>
}
