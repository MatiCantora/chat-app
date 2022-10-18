import React from "react"
import dots from "../img/dots.png"
import { Messages } from "./Messages"
import { Input } from "./Input"

export const Chat = () => {
	return (
		<div className="chat">
			<div className="chat-info">
				<span>Josefina</span>
				<div className="chat-icons">
					<img src={dots} alt="" />
				</div>
			</div>
			<Messages />
			<Input />
		</div>
	)
}
