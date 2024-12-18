import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Navbar'
import MainPage from './pages/MainPage'
import CartPage from './pages/cartPage'
function App() {
	return (
		<>
			<Main />

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/cart' element={<CartPage />} />
			</Routes>
		</>
	)
}

export default App
