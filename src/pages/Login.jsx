import React from "react"

export const Login = () => {
	return (
		<div className="form-container">
			<div className="form-wrapper">
				<span>Ingresa!</span>
				<form>
					<input type="email" name="" id="" placeholder="Email" />
					<input type="password" name="" id="" placeholder="Contraseña" />

					<button>Ingresar</button>
				</form>
				<p>No tienes cuenta? Registrate</p>
			</div>
		</div>
	)
}
