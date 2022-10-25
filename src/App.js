// import Home from "./pages/Home.jsx"
import { Register } from "./pages/Register.jsx"
import { Login } from "./pages/Login.jsx"

// import { Login } from "./pages/Login.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"

import "./styles.scss"

function App() {
	const { currentUser } = this

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
