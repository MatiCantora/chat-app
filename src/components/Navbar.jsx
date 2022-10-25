import React from "react"
import user from "../img/user.png"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Chat App</span>
			<div className="user">
				<img src={user} alt="" />
				<span>Mati</span>
				<button onClick={() => signOut(auth)}>Cerrar Sesion</button>
			</div>
		</div>
	)
}
