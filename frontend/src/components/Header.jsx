import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../contexts/AuthContext.jsx'
import { User } from './User.jsx'
import './Header.css'
import PapugaLogo from '../assets/papuga-logo.svg'

export function Header() {
  const [token, setToken] = useAuth()

  if (token) {
    const { sub } = jwtDecode(token)
    return (
      <div className='header'>
        Logged in as <User id={sub} />
        <br />
        <button onClick={() => setToken(null)}>Logout</button>
      </div>
    )
  }
  return (
    <nav className='header'>
      <div className='about'>
        <p>About</p>
      </div>
      <h1 className='title'>
        <img src={PapugaLogo} alt='Your SVG' className='logo' />
      </h1>
      <div className='actions'>Search section</div>
      {/* <Link to='/login'>Log In</Link> | <Link to='/signup'>Sign Up</Link> */}
    </nav>
  )
}
