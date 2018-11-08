import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component{
  render(){
    renderField(field){
      return(
        <div className="form-group">
          <input
          className="form-control"
          type="text"
           />
        </div>
      );
    }
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
