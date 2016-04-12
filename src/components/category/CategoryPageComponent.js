import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { insertCategory } from '../../actions/category'
import { hashHistory } from 'react-router'
import { Container, Section, Columns, Column, Icon, Title } from 'bulma-react'

import CategoryForm from './CategoryFormComponent'
import CategoryList from './CategoryListComponent'

export default class CategoryPageComponent extends Component {

  render () {
    return (
      <Section>
        <Container>

          <Columns>
            <Column is-10 is-offset-1>
              <Title is-text-centered>
                <Icon icon="arrow-left"
                      is-pulled-left
                      onClick={hashHistory.goBack.bind(this)}/>
                Category
              </Title>
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
