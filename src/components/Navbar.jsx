import React from "react"
import user from "../img/user.png"
export const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">Chat App</span>
			<div className="user">
				<img src={user} alt="" />
				<span>Mati</span>
				<button>Cerrar Sesion</button>
			</div>
		</div>
	)
}
