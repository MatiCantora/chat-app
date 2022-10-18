import React from "react"
import user from "../img/user.png"

export const Search = () => {
	return (
		<div className="search">
			<div className="search-form">
				<input type="text" name="" id="" placeholder="Buscar contacto" />
			</div>
			<div className="user-chat">
				<img src={user} alt="" />
				<div className="user-chat-info">
					<span>Josefina</span>
				</div>
			</div>
		</div>
	)
}
