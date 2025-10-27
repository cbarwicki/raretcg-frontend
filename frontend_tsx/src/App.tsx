import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Login/> */}
      {/* <Signup /> */}
      <Home />
    </div>
  )
}

export default App
