import React, {Component} from 'react';
import {fetchPosts} from '../actions/index';
import {connect} from 'React-redux';

class PostsIndex extends Component{
  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          
        </ul>
      </div>
    );
  }
}
export default connect(null, {fetchPosts})(PostsIndex);
