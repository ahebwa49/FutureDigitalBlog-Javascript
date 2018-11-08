import _ from 'lodash';
import React, {Component} from 'react';
import {fetchPosts} from '../actions/index';
import {connect} from 'React-redux';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){

  }
  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
export default connect(null, {fetchPosts})(PostsIndex);
