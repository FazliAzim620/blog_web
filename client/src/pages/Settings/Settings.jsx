import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingPP">
                    <img src="./images/pic.png" className='settingPpImg' alt="" />
                    <label htmlFor="fileInput"> 
                    <i className="settingsProfileImg fa-solid fa-user"></i>
                     </label>
                     <input type="file" id='fileInput' style={{display:'none'}} />
                </div>
                <label >UserName</label>
                     <input type="text" placeholder='Azim' />
                     <label >Email</label>
                     <input type="email" placeholder='azim@gmail.com' />
                     <label >Password</label>
                     <input type="password" placeholder='******' />
                     <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings