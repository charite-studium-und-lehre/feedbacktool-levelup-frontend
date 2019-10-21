import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import Item from './Item'
import { Separator } from './Newsfeed'
import { withTranslation } from 'react-i18next'

const stateToProps = state => ({ data: selectors.getData(state) })
const Newsfeed = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps), withTranslation()])(({ t, data }) => 
    <div className="pb-3">
        <div className="text-center">
        {_.size(data) ? 
            <div className="d-flex">
                <Separator />
                <div style={{color: 'grey'}} className="font-italic">{data[0].zeitsemester}</div>
                <Separator />
            </div> :
            <div className="p-3">{t('Hier werden zukünftig deine Prüfungen angezeigt.')}</div>
        }
        </div>
        { !!_.size(data) && data[0].map( d => 
            <Item key={d.link} icon={d.icon} color={d.color} link={d.link}>
                <d.comp {...d} /> 
            </Item>
        )}
    </div>
)

export default Newsfeed