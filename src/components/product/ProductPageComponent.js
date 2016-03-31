import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
require('react-image-gallery/build/image-gallery.css')
import { Container, Section, Columns, Column, Content, Button, Title } from 'bulma-react'

const images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    originalClass: 'featured-slide',
    thumbnailClass: 'featured-thumb',
    originalAlt: 'original-alt',
    thumbnailAlt: 'thumbnail-alt',
    description: 'Optional description...'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  }
];

class ProductPageComponent extends Component {

  componentWillMount () {
    this.props.loadProduct(this.props.productIndex)
  }

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-6>
              <ImageGallery items={images}
                            autoPlay={true}
                            slideInterval={4000}
                            onSlide={this.handleSlide}/>
            </Column>
            <Column is-6>
              <Title>{this.props.product.name}</Title>
              <p className="title">${this.props.product.price}</p>
              <Content>
                <p className="subtitle">{this.props.product.description}</p>
              </Content>
              <Button is-primary is-large>Add to Cart</Button>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }
}

export default ProductPageComponent
