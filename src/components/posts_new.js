import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';


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
 onFormSubmit(values) {
    console.log(values);
  }
 render(){

    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
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
           <button className="btn btn-primary" type="submit">Submit</button>
           <Link className="btn btn-danger" to="/">Cancel</Link>
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
