import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"
import { auth } from "../firebase"

export const Login = () => {
	const [err, setErr] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const email = e.target[0].value
		const password = e.target[1].value

		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate("/login")
		} catch (err) {
			setErr(true)
		}
	}

	return (
		<div className="form-container">
			<div className="form-wrapper">
				<span>Ingresa!</span>
				<form onSubmit={handleSubmit}>
					<input type="email" name="" id="" placeholder="Email" />
					<input type="password" name="" id="" placeholder="Contraseña" />

					<button>Ingresar</button>
					{err && <span>Algo salio mal</span>}
				</form>
				<p>
					No tienes cuenta? <Link to="/register">Registrate</Link>
				</p>
			</div>
		</div>
	)
}
