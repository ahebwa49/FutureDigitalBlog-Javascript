import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component{
  render(){
    return(
      <form>
        <Field
          name="title"
          component={this.renderField}
         />
      </form>
    );
  }
}

export default reduxForm({
  form: 'FormNewPosts'
})(PostsNew);
