import './write.css'

const Write = () => {
  return (
    <div className='write'>
    <img src="./images/food2.avif" className='writeImg' alt="" />
        <form  className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' placeholder='Tell your Story...'></textarea>
            </div>
            <button className='writePublish'>Publish</button>
        </form>
    </div>
  )
}

export default Write