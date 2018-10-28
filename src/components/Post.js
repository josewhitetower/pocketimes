import React, {Component} from 'react'
import {connect} from 'react-redux';

import { deletePost } from "../actions/posts";
class Post extends Component {

    handleClick = () => this.props.deletePost(this.props.post.id) && this.props.history.push('/')
   
    render() {
        const post = this.props.post 
        ?
          <div className="post">
              <h4 className="center" >{this.props.post.title}</h4>
              <p>{this.props.post.body}</p>
              <div className="center">
                  <button className="btn grey" onClick={this.handleClick}>
                      Delete Post
                  </button>
              </div>
          </div>  
        : <div className="center">Loadin post...</div>
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {    
    return {
        post: state.posts.find(post=> post.id === props.match.params.post_id)
    }
}

const mapDispatchToProps = (dipatch) => {
    return {
        deletePost: (id) => dipatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)