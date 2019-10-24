import _ from 'lodash/fp'
import { selectors as MCSelectors, actions as MCActions } from '../Exams/MC/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../Exams/Ptm/Store'

const getData = _.flow(
    _.over([MCSelectors.getSubjectsTotals, _.flow(PtmSelectors.getLatest, PtmSelectors.getFächer)]),
    _.map(_.keyBy(s => s.name)),
    ([ mcFächer, ptmFächer ]) => {
        const subs = _.uniq(_.keys(mcFächer).concat(_.keys(ptmFächer)))
        return subs.map( s => ({ name: s, mc: mcFächer[s], ptm: ptmFächer[s] }))
    },
    d => ({ data: d })
)

const selectors = {
    loaded: _.overEvery([ PtmSelectors.loaded, MCSelectors.loaded ]),
    getData,
}

const actions = {
    load: () => _.over([PtmActions.load(), MCActions.load()])
}

export { selectors, actions }