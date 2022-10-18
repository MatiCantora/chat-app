import React from "react"
import user from "../img/user.png"

export const Chats = () => {
	return (
		<div className="chats">
			<div className="user-chat">
				<img src={user} alt="" />
				<div className="user-chat-info">
					<span>Josefina</span>
					<p>Hola</p>
				</div>
			</div>
		</div>
	)
}
