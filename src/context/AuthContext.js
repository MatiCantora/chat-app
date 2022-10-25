import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
		})
	}, [])
	;<AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}
