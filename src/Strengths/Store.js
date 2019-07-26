import _ from 'lodash/fp'
import { selectors as SemesterSelectors, actions as SemesterActions } from '../Exams/Semester/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../Exams/Ptm/Store'

const getData = _.flow(
    _.over([SemesterSelectors.getSubjectsTotals, _.flow(PtmSelectors.getLatest, PtmSelectors.getFächer)]),
    _.map(_.keyBy(s => s.name)),
    ([ mcFächer, ptmFächer ]) => {
        const subs = _.uniq(_.keys(mcFächer).concat(_.keys(ptmFächer)))
        return subs.map( s => ({ name: s, mc: mcFächer[s], ptm: ptmFächer[s] }))
    },
    d => ({ data: d })
)

const selectors = {
    loaded: _.overEvery([ PtmSelectors.loaded, SemesterSelectors.loaded ]),
    getData,
}

const actions = {
    load: () => _.over([PtmActions.load(), SemesterActions.load()])
}

export { selectors, actions }