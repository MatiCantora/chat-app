import React from "react"
import avatar from "../img/avatar.png"

export const Register = () => {
	return (
		<div className="form-container">
			<div className="form-wrapper">
				<span>Registrate!</span>
				<form>
					<input type="text" name="" id="" placeholder="Nombre" />
					<input type="email" name="" id="" placeholder="Email" />
					<input type="password" name="" id="" placeholder="Contraseña" />
					<input type="password" name="" id="" placeholder="Contraseña" />
					<input type="file" name="" id="file" style={{ display: "none" }} />
					<label htmlFor="file">
						<img src={avatar} alt="" />
					</label>
					<button>Registrarse</button>
				</form>
				<p>Ya tenes cuenta? Ingresar</p>
			</div>
		</div>
	)
}
