import React, {Component} from 'react';
import {fetchPosts} from '../actions/index';
import {connect} from 'React-redux';

class PostsIndex extends Component{
  render(){
    return(
      <div>
        <h3>PostsIndex</h3>
      </div>
    );
  }
}
export default PostsIndex;
