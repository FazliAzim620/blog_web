import './singlepost.css'

const SinglePost = () => {
  return (
    <div className='singlepost'>
    <div className="singlePostWrapper">
        <img className='singlePostImg' src="./images/pic.png" alt="" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pencil"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Azim</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur assumenda neque, 
        perferendis tempora magni saepe molestiae amet doloremque, fugiat iusto repudiandae reiciendis eligendi, 
        ratione quisquam asperiores debitis necessitatibus architecto? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur facilis sint.
        ratione quisquam asperiores debitis necessitatibus architecto? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur facilis sint.
        ratione quisquam asperiores debitis necessitatibus architecto? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aspernatur facilis sint.
        </p>
    </div>
    </div>
  )
}

export default SinglePost