import './post.css'

const Post = () => {
  return (
    <div className='post'>
    <img className='postImage' src="./images/pic3.jpg" alt="" />
    <div className="postInfo">
        <div className="postCates">
            <span className="postCat">Sports </span>
            <span className="postCat">Musics </span>

        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nulla assumenda quo expedita nam?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nulla assumenda quo expedita nam?
    </p>
    </div>
  )
}

export default Post