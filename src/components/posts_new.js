import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component{
  renderField(field){
    return(
      <div className="form-group">
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
         />
      </div>
    );
  }
  render(){

    return(
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
         />
        <Field
           label="Category"
           name="category"
           component={this.renderField}
          />

      </form>
    );
  }
}

export default reduxForm({
  form: 'FormNewPosts'
})(PostsNew);
