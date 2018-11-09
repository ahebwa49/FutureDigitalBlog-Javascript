import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsShow extends Component{
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }
  render(){
    const {post} = this.props;
    return(
      <div>
        PostsShow!
      </div>
    );
  }
}
function mapStateToProps({posts}, ownProps){
  return{post: posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchPost})(PostsShow);
