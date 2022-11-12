import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)
  console.log('authReady'+authReady)

  return (
    <div className="container">
      <nav>
        <h1>NAV</h1>
        {authReady && (
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/guides"><a>Guides</a></Link></li>
            {!user && <li onClick={login} className="btn">Login/Signup</li>}
            {user && <li>{user.email}</li>}
            {user && <li onClick={logout} className="btn">Logout</li>}
          </ul>
        )}
      </nav>
    </div>
  )
}
