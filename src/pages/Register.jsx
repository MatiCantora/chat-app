import React from "react"
import avatar from "../img/avatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db, storage } from "../firebase"
import { useState } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { useNavigate, Link } from "react-router-dom"

export const Register = () => {
	const [err, setErr] = useState(false)
	const navigate = useNavigate()
	const handleSubmit = async (e) => {
		e.preventDefault()
		const name = e.target[0].value
		const email = e.target[1].value
		const pass1 = e.target[2].value
		const pass2 = e.target[3].value
		const file = e.target[4].files[0]

		let password
		if (pass1 === pass2) {
			password = pass1
		} else setErr(true)

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password)

			const storageRef = ref(storage, name)

			const uploadTask = uploadBytesResumable(storageRef, file)

			uploadTask.on(
				(error) => {
					setErr(true)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateProfile(res.user, {
							name,
							file: downloadURL,
						})
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							name,
							email,
							file: downloadURL,
						})

						await setDoc(doc(db, "userChats", res.user.uid), {})
						navigate("/")
					})
				}
			)
		} catch (err) {
			setErr(true)
		}
		const res = createUserWithEmailAndPassword(auth, email, password)
	}

	return (
		<div className="form-container">
			<div className="form-wrapper">
				<span>Registrate!</span>
				<form onSubmit={handleSubmit}>
					<input type="text" name="" id="" placeholder="Nombre" />
					<input type="email" name="" id="" placeholder="Email" />
					<input type="password" name="" id="" placeholder="Contraseña" />
					<input type="password" name="" id="" placeholder="Contraseña" />
					<input type="file" name="" id="file" style={{ display: "none" }} />
					<label htmlFor="file">
						<img src={avatar} alt="" />
					</label>
					<button>Registrarse</button>
					{err && <span>Algo salio mal</span>}
				</form>
				<p>
					Ya tenes cuenta? <Link to="/login">Ingresá</Link>
				</p>
			</div>
		</div>
	)
}
