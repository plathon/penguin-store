import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Input, Button } from 'bulma-react'

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

  //address line one validations
  if (!values.address_line_one) {
    errors.address_line_one = 'Required'
  }
  if (values.address_line_one && values.address_line_one.length < 3) {
    errors.address_line_one = 'very short name'
  }
  if (values.address_line_one && values.address_line_one.length > 45) {
    errors.address_line_one = 'very long name'
  }

  //address line two validations
  if (!values.address_line_two) {
    errors.address_line_two = 'Required'
  }
  if (values.address_line_two && values.address_line_two.length < 3) {
    errors.address_line_two = 'very short name'
  }
  if (values.address_line_two && values.address_line_two.length > 45) {
    errors.address_line_two = 'very long name'
  }

  //city validations
  if (!values.city) {
    errors.city = 'Required'
  }
  if (values.city && values.city.length < 3) {
    errors.city = 'very short name'
  }
  if (values.city && values.city.length > 45) {
    errors.city = 'very long name'
  }

  //state validations
  if (!values.state) {
    errors.state = 'Required'
  }
  if (values.state && values.state.length < 2) {
    errors.state = 'very short name'
  }
  if (values.state && values.state.length > 45) {
    errors.state = 'very long name'
  }

  //zip validations
  if (!values.zip) {
    errors.zip = 'Required'
  }
  if (values.zip && values.zip.length < 3) {
    errors.zip = 'very short name'
  }
  if (values.zip && values.zip.length > 45) {
    errors.zip = 'very long name'
  }

  //country validations
  if (!values.country) {
    errors.country = 'Required'
  }
  if (values.country && values.country.length < 3) {
    errors.country = 'very short name'
  }
  if (values.country && values.country.length > 45) {
    errors.country = 'very long name'
  }

  //phone validations
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (values.phone && values.phone.length < 3) {
    errors.phone = 'very short name'
  }
  if (values.phone && values.phone.length > 45) {
    errors.phone = 'very long name'
  }
  return errors
}

/**
* Component
**/

class AddressFormComponent extends Component {

  render () {
    const { fields: { name, address_line_one, address_line_two, city, state, zip, country, phone }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.insertAddress)}>

        <Input type="text"
               label="Name"
               placeholder="type the address name"
               showError={name.touched && name.error}
               is-danger={name.touched && name.error}
               {...name}/>

        <Input type="text"
               label="Address line 1"
               placeholder="type first line address"
               showError={address_line_one.touched && address_line_one.error}
               is-danger={address_line_one.touched && address_line_one.error}
               {...address_line_one}/>

        <Input type="text"
               label="Address line 2"
               placeholder="type second line address"
               showError={address_line_two.touched && address_line_two.error}
               is-danger={address_line_two.touched && address_line_two.error}
               {...address_line_two}/>

       <Input type="text"
              label="City"
              placeholder="type your city"
              showError={city.touched && city.error}
              is-danger={city.touched && city.error}
              {...city}/>

       <Input type="text"
              label="State"
              placeholder="type your state"
              showError={state.touched && state.error}
              is-danger={state.touched && state.error}
              {...state}/>

       <Input type="text"
              label="Zip Code"
              placeholder="type your zip code"
              showError={zip.touched && zip.error}
              is-danger={zip.touched && zip.error}
              {...zip}/>

       <Input type="text"
              label="Country"
              placeholder="type your country"
              showError={country.touched && country.error}
              is-danger={country.touched && country.error}
              {...country}/>

       <Input type="text"
              label="Phone Number"
              placeholder="type your phone number"
              showError={phone.touched && phone.error}
              is-danger={phone.touched && phone.error}
              {...phone}/>

        <Button type="submit"
                is-primary
                is-loading={this.props.isLoading}
                is-disabled={this.props.isLoading}>Save</Button>

      </form>
    )
  }

}

AddressFormComponent = reduxForm({
  form: 'address',
  fields: ['name', 'address_line_one', 'address_line_two', 'city', 'state', 'zip', 'country', 'phone'],
  validate
})(AddressFormComponent)

export default AddressFormComponent
