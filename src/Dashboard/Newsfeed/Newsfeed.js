import React from 'react'
import {connect} from 'react-redux'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import Item from './Item'
import COLORS from "../../colors";
import {compose, size, map} from "../../Utils/utils";

export const Separator = () => <div className="px-2 flex-grow-1 d-flex align-items-center">
    <div className="w-100" style={{borderTop: '1px solid '+ COLORS.background.grey5, height: 0}}></div>
</div>

const stateToProps = state => ({data: selectors.getData(state)})
const Newsfeed = compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({data}) =>
    <div className="pt-3 h-100">
        <div className="position-relative h-100" style={{minHeight: '10rem', overflowX: 'hidden', overflowY: 'auto'}}>
            <div className="position-absolute" style={{top: 0, bottom: 0, left: 0, right: 0}}>
                {
                    size(data) ? map(g =>
                        <div key={g[0].zeitsemester}>
                            <div className="text-center font-italic mb-3 d-flex" style={{ fontSize: '.8rem' }}>
                                <Separator />
                                <div style={{color: COLORS.background.grey6}}>{g[0].zeitsemester}</div>
                                <Separator />
                            </div>
                            {
                                g.map(d =>
                                    <Item key={d.link} icon={d.icon} color={d.color} link={d.link}>
                                        <d.comp {...d} />
                                    </Item>
                                )
                            }
                        </div>
                    )(data) :
                    <div className="text-center p-3">Hier werden zukünftig deine Prüfungen angezeigt.</div>
                }
            </div>
        </div>
    </div>
)

export default Newsfeed
