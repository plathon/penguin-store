import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import Button from '../../template/src/components/Button'

/**
* Validations
**/

const validate = values => {
  const errors = {}
  //name validations
  if (!values.name) {
    errors.name = 'Required'
  }
  if (values.name && values.name.length < 3) {
    errors.name = 'very short name'
  }
  if (values.name && values.name.length > 45) {
    errors.name = 'very long name'
  }
  return errors
}

/**
* Component
**/

class CategoryFormComponent extends Component {

  constructor (props) {
    super(props)
    this.insertCategory = this.insertCategory.bind(this)
  }

  insertCategory (category) {
    this.props.insertCategory(category)
    this.props.resetForm()
  }

  render () {
    const { fields: { name }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.insertCategory)}>
        <div className="control is-horizontal">

          <input type="text"
                 className="input"
                 placeholder="Type the category name"
                 {...name}/>

          <Button type="submit"
                  is-primary
                  is-loading={this.props.isLoading}
                  is-disabled={this.props.isLoading}>Create</Button>

        </div>
        {name.touched && name.error && <span className="is-danger">{name.error}</span>}
      </form>
    )
  }
}

CategoryFormComponent = reduxForm({
  form: 'categoryADM',
  fields: ['name'],
  validate
})(CategoryFormComponent)

export default CategoryFormComponent
