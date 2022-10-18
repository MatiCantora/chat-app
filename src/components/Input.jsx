import React from "react"
import avatar from "../img/avatar.png"
import send from "../img/send.png"

export const Input = () => {
	return (
		<div className="input">
			<input type="text" name="" id="" placeholder="Di algo..." />
			<div className="send">
				<input style={{ display: "none" }} type="file" name="" id="file" />
				<label htmlFor="file">
					<img src={avatar} alt="" />
				</label>
				<button>
					<img src={send} alt="" />
				</button>
			</div>
		</div>
	)
}
