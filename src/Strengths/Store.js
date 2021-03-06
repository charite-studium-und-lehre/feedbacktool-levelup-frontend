import _ from 'lodash/fp'
import { selectors as MCSelectors, actions as MCActions } from '../Exams/MC/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../Exams/Ptm/Store'

const getData = _.flow(
    _.over([MCSelectors.getSubjectsTotals, _.flow(PtmSelectors.getLatest, PtmSelectors.getFaecher)]),
    _.map(_.keyBy(s => s.titel)),
    ([ mcFaecher, ptmFaecher ]) => {
        const subs = _.uniq(_.keys(mcFaecher).concat(_.keys(ptmFaecher)))
        return subs.map( s => ({ 
            titel: s, 
            mc: mcFaecher[s] && { ...mcFaecher[s], value: mcFaecher[s].ergebnisPunktzahl }, 
            ptm: ptmFaecher[s] && { ...ptmFaecher[s], value: ptmFaecher[s].ergebnisRichtigPunktzahl },
        }))
    },
    d => ({ subjects: d })
)

const selectors = {
    loaded: _.overEvery([ PtmSelectors.loaded, MCSelectors.loaded ]),
    getData,
}

const actions = {
    load: () => _.over([PtmActions.load(), MCActions.load()])
}

export { selectors, actions }