import React from 'react'
import _ from 'lodash/fp'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../../Charting/SimpleBar'
import makeExtendable from '../../Core/makeExtendable'
import SlideDown from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Station = props =>
    <div onClick={() => props.data.details && props.toggleExtended()}>
        <div className="animated pt-2">
            <div style={{fontSize: '.9rem', marginBottom: '-.3rem', color: 'rgba(0,0,0,.75)'}}>{props.data.titel}</div>
            <div style={{position: 'relative', minHeight: '1.5rem'}}>
                <div style={{opacity: props.extended ? 0 : 1}} className="animated w-100 h-100 position-absolute">
                    <SimpleBar height='100%' value={props.data.ergebnisProzentzahl} mean={props.data.durchschnittProzentzahl} total={1} color={props.color}>
                        {props.data.ergebnisProzentzahl * 100} %
                        {props.data.details && <span className="ml-2 float-left">
                          <FontAwesomeIcon style={{fontSize: '.8rem'}} icon={faPlus}/>
                        </span>}
                    </SimpleBar>
                </div>
                <div style={{opacity: props.extended ? 1 : 0}} className="animated">
                    {props.data.details && 
                        <SlideDown >
                            {props.extended && 
                                <div>
                                    {props.data.details.map( s =>
                                        <Station
                                            color={props.color}
                                            key={s.code}
                                            style={{opacity: props.extended ? 1 : 0}}
                                            data={s} />
                                    )}
                                    <div style={{fontSize: '.8rem'}} className="text-primary text-right mt-2">{props.t(`schließen`)}</div>
                                </div>
                            }
                        </SlideDown>
                    }
                </div>
            </div>
        </div>
    </div>

export default _.compose([ withTranslation(), makeExtendable ])(Station)