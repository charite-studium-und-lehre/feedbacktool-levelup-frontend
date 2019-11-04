import React from 'react'
import { connect } from 'react-redux'
import { selectors, actions } from './RequestsStore'
import needsData from '../../Core/needsData'

const stateToProps = state => ({ items: selectors.getItems(state) })
const load = ownProps => actions.load(ownProps.match.params.token)
const Assessment = [needsData(selectors.loaded, load), connect(stateToProps, actions)].reduceRight((f,g) => g(f), ({ getRequest, match }) => 
    <div onClick={() => getRequest(match.params.token)}>Hier kommt das Assessment!</div>
)
export default Assessment