import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import colors from '../../colors'
import { selectors, actions } from './Store'

const Level = ({ selected, onClick, children }) => 
    <div onClick={onClick} className="d-inline-block m-2" 
        style={{ 
            borderRadius: '15%',
            width: '1.5rem', 
            backgroundColor: selected ? colors.background.grey6 : colors.background.grey2,
            border: `1px solid ${colors.background.grey5}`,
            color: 'white',
            cursor: 'pointer'
        }}>
        {children}
    </div>
const stateToProps = (state, ownProps) => ({ value: selectors.getEpa(state, ownProps.entryId).value })
const Rating = connect(stateToProps, actions)(({ t, setEpa, value, entryId }) =>
    <div className="text-center">
        {[1,2,3,4,5].map( l => <Level key={l} selected={l===value} onClick={() => setEpa(entryId, l)}>{l}</Level>)}
        <div style={{fontSize: '.8em', cursor: 'pointer'}} className="d-inline-block ml-2 color-navigation" onClick={() => setEpa(entryId, null)}>
            <u>{t('zurücksetzen')}</u>
        </div>
    </div>
)

export default withTranslation()(Rating)