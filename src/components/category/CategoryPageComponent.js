import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertCategory } from '../../actions/category'
import { browserHistory } from 'react-router'

import Container from '../../template/src/components/Container'
import Section from '../../template/src/components/Section'
import Columns from '../../template/src/components/Columns'
import Column from '../../template/src/components/Column'
import Icon from '../../template/src/components/Icon'

import CategoryForm from './CategoryFormComponent'
import CategoryList from './CategoryListComponent'

export default class CategoryPageComponent extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <h1 className="title is-text-centered">
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={browserHistory.goBack.bind(this)}/>
                Category
              </h1>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <CategoryForm insertCategory={this.props.insertCategory}
                            isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

          <Columns>
            <Column is-10 is-offset-1>
              <CategoryList categories={this.props.categories}
                            removeCategory={this.props.removeCategory}
                            isLoading={this.props.isLoading}/>
            </Column>
          </Columns>

        </Container>
      </Section>
    )
  }

}
