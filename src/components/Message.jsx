import React from "react"
import user from "../img/user.png"

export const Message = () => {
	return (
		<div className="message owner">
			<div className="message-info">
				<img src={user} alt="" />
				<span></span>
			</div>
			<div className="message-content">
				<p>Hola</p>
				{/* <img src="" alt="" /> */}
			</div>
		</div>
	)
}
