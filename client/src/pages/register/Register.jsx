import './register.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
    <span className="registerTitle">register</span>
        <form  className="registerForm">
            <label>UserName</label>
            <input type="text" placeholder='Enter UserName' />
            <label>Email</label>
            <input type="email" placeholder='Enter Your Email' />
            <label>Password</label>
            <input type="password" placeholder='Enter Your Password' />
            <button className="registerButton">register</button>
        </form>
        <Link to='/login'>

        <button className='registerLoginButton'>Login</button>
        </Link>
    </div>
  )
}

export default Register