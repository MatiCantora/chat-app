import React from "react"
import avatar from "../img/avatar.png"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, getStorage } from "../firebase"
import { useState } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export const Register = () => {
	const [err, setErr] = useState(false)
	const handleSubmit = async (e) => {
		e.preventDefault()
		const name = e.target[0].value
		const email = e.target[1].value
		const pass1 = e.target[2].value
		const pass2 = e.target[3].value
		const file = e.target[4].files[0]

		try {
			const storageRef = ref(storage, name)

			const uploadTask = uploadBytesResumable(storageRef, file)

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log("Upload is " + progress + "% done")
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused")
							break
						case "running":
							console.log("Upload is running")
							break
					}
				},
				(error) => {},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						console.log("File available at", downloadURL)
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
				<p>Ya tenes cuenta? Ingresar</p>
			</div>
		</div>
	)
}
