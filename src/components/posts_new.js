import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component{
  render(){
    return(
      <form>
        
      </form>
    );
  }
}

export default reduxForm({
  form: 'FormNewPosts'
})(PostsNew);
