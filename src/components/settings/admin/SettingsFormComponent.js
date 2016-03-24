import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import Input from '../../../template/src/components/Input'
import Textarea from '../../../template/src/components/Textarea'
import Checkbox from '../../../template/src/components/Checkbox'
import Button from '../../../template/src/components/Button'
import Control from '../../../template/src/components/Control'

/**
* validations
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
  //url validations
  if (!values.url) {
    errors.url = 'Required'
  }
  //description validations
  if (!values.description) {
    errors.description = 'Required'
  }
  return errors
}

/**
* Component
**/

class SettingsFormComponent extends Component {
  render () {
    const { fields: { name, url, description, available }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.insertSettings)}>

        <Input type="text"
               label="Name"
               placeholder="type the store name"
               showError={name.touched && name.error}
               is-danger={name.touched && name.error}
               {...name}/>

       <Input type="text"
              label="Url"
              placeholder="type the store url"
              showError={url.touched && url.error}
              is-danger={url.touched && url.error}
              {...url}/>

       <Textarea label="Description"
                 placeholder="type a short description to the store"
                 showError={description.touched && description.error}
                 is-danger={description.touched && description.error}
                 {...description}/>

       <Checkbox description="Store ready to sale" {...available}/>

         <Control>
           <Button type="submit"
                   is-primary
                   is-large
                   is-loading={this.props.isLoading}
                   is-disabled={this.props.isLoading}>Save</Button>
        </Control>

      </form>
    )
  }
}

SettingsFormComponent = reduxForm({
  form: 'settings',
  fields: ['name', 'url', 'description', 'available'],
  validate
},
state => ({
  initialValues: state.settings.data
}))(SettingsFormComponent)

export default SettingsFormComponent
