import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import Cart from './components/Cart/Cart'
import Pizza from './components/Pizza/Pizza'
const App = () => {
  return (
    <div>
      <Navbar />
      <Pizza />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart/> */}
      <Footer />
    </div>
  )
}
export default App
