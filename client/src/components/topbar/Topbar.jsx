import './topbar.css'

import { Link } from 'react-router-dom'
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
            <Link to='/' className='topbarLink'>

                <li className="topListItems">home</li>
            </Link>
            <Link to='about' className='topbarLink'>

                <li className="topListItems">about</li>
            </Link>
              <Link to='write' className='topbarLink'>
              <li className="topListItems">contact us</li>
              </Link>  
              <Link to='write' className='topbarLink'>
              <li className="topListItems">write</li>
              </Link>  
              <Link to='/login' className='topbarLink'>
              <li className="topListItems">Log out</li>
              </Link>  
              
  
            </ul>
        </div>
        <div className="topRight">
        <Link to='/settings' className='topbarLink'>

        <img className='topImage' src="./images/pic2.jpg" alt="image" />
        </Link>
        <i className="topSearchIcon fa-brands fa-searchengin"></i>
        </div>
    </div>
  )
}

export default Topbar