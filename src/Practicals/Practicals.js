import React from 'react'
import makeExtendable from '../Core/makeExtendable'
import Container from './Container'
import List from './List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl } from '@fortawesome/free-solid-svg-icons'

const Practicals = props => (
    <div className="container-fluid">
            <div className="row position-relative">
                <div className="col-lg-9 mb-2">
                    <Container />
                </div>
                <div className="col-lg-3 d-none d-lg-block position-fixed" style={{right: 0}}>
                    <div className="card py-1">
                        <List/>
                    </div>
                </div>
                <div className="position-fixed animated w-100 d-block d-lg-none" style={{top: '4rem', left: props.extended ? 0 : 'calc(100% - 2rem)'}}>
                    <div className="position-absolute bg-white p-2 with-z-shadow" style={{width: '2rem'}} onClick={props.toggleExtended}>
                        <FontAwesomeIcon className="text-secondary" icon={faListOl} />
                    </div>
                    <div className="bg-white with-z-shadow px-2" style={{marginLeft: '2rem'}}>
                        <List />
                    </div>
                </div>
            </div>
    </div>
)

export default makeExtendable(Practicals)

