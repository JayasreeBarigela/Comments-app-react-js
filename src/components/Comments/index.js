import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    count: 0,
    name: '',
    comment: '',
  }

  onAddName = event => {
    this.setState({name: event.target.value})
  }

  onAddComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const commentItem = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentItem],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, count, name, comment} = this.state
    return (
      <div>
        <h1>Comments</h1>
        <div className="container">
          <div>
            <p>Say something about 4.O Technologies</p>
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={this.onAddName}
            />
            <input
              type="text-area"
              placeholder="Your Comment"
              onChange={this.onAddComment}
              value={comment}
            />
            <button type="button" onClick={this.onAddComment}>
              Add Comment
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div>
          <p>
            <span>{count}</span> Comments
          </p>
          <ul>
            {commentsList.map(eachCommentItem => (
              <CommentItem
                key={eachCommentItem.id}
                commentDetails={eachCommentItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
