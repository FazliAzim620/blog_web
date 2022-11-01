import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className='sidebarImg' src="./images/pic.png" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam consequatur,
         rem quod tempore eligendi cupiditate sapiente sed quo veritatis omnis distinctio.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Health</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">News</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Life</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">follow us</span>
           <div className="sidebarSocial">
           <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
           </div>
        </div>

    </div>
  )
}

export default Sidebar