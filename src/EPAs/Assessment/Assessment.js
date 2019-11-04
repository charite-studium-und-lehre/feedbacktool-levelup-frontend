import React from 'react'
import { connect } from 'react-redux'
import { selectors, actions } from './Store'

const stateToProps = state => ({ items: selectors.getItems(state) })
const Assessment = connect(stateToProps, actions)(({ getRequest, match }) => 
    <div onClick={() => getRequest(match.params.token)}>Hier kommt das Assessment!</div>
)
export default Assessment