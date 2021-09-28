import React from 'react'
import makeExtendable from '../Core/makeExtendable'
import SimpleBar from '../Charting/SimpleBar'
import COLORS from "../colors";
import SlideDown from 'react-slidedown';

const Ranking = props =>
    props.subjects.length ?
    <div>
        <div>
            <SlideDown className="animated fast" >
            {props.subjects.slice(0, props.extended ? props.subjects.length : 3).map((s, i) =>
                <div key={s.code} className="py-2">
                    <h5><span >#{i+1}</span> {s.titel}</h5>
                    <SimpleBar
                        colorTotal={COLORS.progress.lighter2}
                        colorPartOfTotal={COLORS.progress.base}
                        value={s.value}
                        total={s.maximalPunktzahl}
                        mean={props.mean && s.mean}>
                        {s.value} von {s.maximalPunktzahl} richtig
                    </SimpleBar>
                </div>
            )}
            </SlideDown>
        </div>
        <div className="text-right">
            <span className="color-navigation" id='Mehr anzeigen' style={{cursor: 'pointer'}} onClick={props.toggleExtended}>
                {props.extended ? 'weniger anzeigen' : 'mehr anzeigen'}
            </span>
        </div>
    </div> :
    <div className="text-center">Noch keine Ergebnisse gefunden.</div>

export default makeExtendable()(Ranking)
