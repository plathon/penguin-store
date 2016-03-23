import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { loadShipping } from '../../../actions/shipping'

import Input from '../../../template/src/components/Input'
import Button from '../../../template/src/components/Button'
import Textarea from '../../../template/src/components/Textarea'
import Select from '../../../template/src/components/Select'
import Checkbox from '../../../template/src/components/Checkbox'
import Control from '../../../template/src/components/Control'

/**
* validations
**/

const validate = values => {
  const errors = {}
  return errors
}

/**
* Component
**/

class ShippingFormComponent extends Component {

  componentWillMount () {
    //is editing?
    if (this.props.shippingIndex) {
      this.props.load(this.props.shippingIndex)
    }
  }

  render () {
    const { fields: { title,
                      delivery_min_time,
                      delivery_max_time,
                      description,
                      apply_to_each_product,
                      price,
                      delivery_to,
                      except,
                      its_free,
                      threshold_to_free }, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.submitShipping)}>

        <Input type="text"
               label="Title"
               placeholder="type a name reference to shipping role"
               showError={title.touched && title.error}
               is-danger={title.touched && title.error}
               {...title}/>

             <label className="label">Delivery time (days)</label>
        <Control is-horizontal>
            <input type="text" className="input" placeholder="min" {...delivery_min_time}/>
            <input type="text" className="input" placeholder="max" {...delivery_max_time}/>
        </Control>

        <Textarea label="Description" {...description}/>

        <Input type="text"
               label="Price"
               placeholder="type the shipping price"
               showError={price.touched && price.error}
               is-danger={price.touched && price.error}
               {...price}/>

        <br />
        <Checkbox description="apply tax to each product on cart" {...apply_to_each_product}/>

        <hr />
        <h4 className="subtitle is-4">Free shipping</h4>

        <Checkbox description="Offer free shipping to your costumer" {...its_free}/>

        <Input type="text"
               label="Threshold"
               placeholder="type the amount threshold"
               showError={threshold_to_free.touched && threshold_to_free.error}
               is-danger={threshold_to_free.touched && threshold_to_free.error}
               {...threshold_to_free}/>

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

ShippingFormComponent = reduxForm({
  form: 'shipping',
  fields: [ 'title',
            'delivery_min_time',
            'delivery_max_time',
            'description',
            'apply_to_each_product',
            'price',
            'delivery_to',
            'except',
            'its_free',
            'threshold_to_free' ],
  validate
},
state => ({
  initialValues: state.shipping.data
}),
{
  load: loadShipping
})(ShippingFormComponent)

export default ShippingFormComponent
