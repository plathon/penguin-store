import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { loadProduct } from '../../../actions/product'

import Input from '../../../template/src/components/Input'
import Button from '../../../template/src/components/Button'
import Textarea from '../../../template/src/components/Textarea'
import Select from '../../../template/src/components/Select'
import Checkbox from '../../../template/src/components/Checkbox'

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
  //price validations
  if (!values.price) {
    errors.price = 'Required'
  }
  //description validations
  if (!values.description) {
    errors.description = 'Required'
  }
  //quantity validations
  if (!values.quantity) {
    errors.quantity = 'Required'
  }
  return errors
}

/**
* Component
**/

class ProductForm extends Component {

  componentWillMount () {
    //is editing?
    if (this.props.productIndex) {
      this.props.load(this.props.productIndex)
    }
  }

  render () {
    const { fields: { name, price, description, quantity, category, available }, handleSubmit, load } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.submitProduct)}>

        <Input type="text"
               label="Name"
               placeholder="type the product name"
               showError={name.touched && name.error}
               is-danger={name.touched && name.error}
               {...name}/>

        <Input type="number"
               label="Price"
               placeholder="Product price"
               showError={price.touched && price.error}
               is-danger={price.touched && price.error}
               {...price}/>

        <Textarea label="Description"
                  placeholder="type the product description"
                  showError={description.touched && description.error}
                  is-danger={description.touched && description.error}
                  {...description}/>

        <Input type="number"
               label="Quantity"
               placeholder="Quantity in stock"
               showError={quantity.touched && quantity.error}
               is-danger={quantity.touched && quantity.error}
               {...quantity}/>

       <Select name="category"
               label="Category"
               value={category.value}
               data={[{'': '', 'name': 'Main Category'}]}
               {...category}/>

       <Checkbox description="Product available to buy"
                 {...available}/>

       <p className="control">
         <Button type="submit"
                 is-primary
                 is-large
                 is-disabled={this.props.isLoading}
                 is-loading={this.props.isLoading}>Save</Button>
       </p>

      </form>
    )
  }
}

ProductForm = reduxForm({
  form: 'productADM',
  fields: ['name', 'price', 'description', 'quantity', 'category', 'available'],
  validate
},
state => ({
  initialValues: state.product.data
}),
{
  load: loadProduct
})(ProductForm)

export default ProductForm
