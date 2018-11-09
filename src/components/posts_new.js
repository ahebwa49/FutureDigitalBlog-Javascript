import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component{
  renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error? 'has-danger': ''}`;
    return(
      <div className={className}>
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
         />
         <div className="text-help">
         {field.meta.touched? field.meta.error: ''}
         </div>
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
        <Field
            label="Content"
            name="content"
            component={this.renderField}
           />
      </form>
    );
  }
}
function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = "Please enter a title";
  }
  if(!values.category){
    errors.category = "Please enter a category";
  }
  if(!values.content){
    errors.content = "Please enter some content";
  }

  return errors;
}
export default reduxForm({
  validate: validate,
  form: 'FormNewPosts'
})(PostsNew);
