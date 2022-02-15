// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment} = commentDetails
  const alphabet = name.slice(0, 1)

  return (
    <div>
      <div className="container">
        <p>{alphabet}</p>
        <h1>{name}</h1>
        <p>less than a minute ago</p>
      </div>
      <p>{comment}</p>
      <div className="container">
        <button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt=""
          />
        </button>
        <p>Like</p>
        <button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt=""
          />
        </button>
      </div>
    </div>
  )
}
export default CommentItem
