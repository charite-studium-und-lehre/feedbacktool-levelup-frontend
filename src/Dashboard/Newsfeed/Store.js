import _ from 'lodash/fp'
import SemesterInfo from './SemesterInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import { selectors as StationsSelectors, actions as StationsActions } from '../../Exams/Stations/Store'
import { selectors as SemesterSelectors, actions as SemesterActions } from '../../Exams/Semester/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../../Exams/Ptm/Store'
import { color as semesterColor } from '../../Exams/Semester/Semester'
import { color as ptmColor } from '../../Exams/Ptm/Ptm'
import { color as stationsColor } from '../../Exams/Stations/Stations'

const getData = _.flow([
    _.over([ 
        _.flow([ StationsSelectors.getTimeline, _.map(_.merge({ icon: 'PP', color: stationsColor, comp: StationsInfo }))]),
        _.flow([ SemesterSelectors.getTimeline, _.map(_.merge({ icon: 'MC', color: semesterColor, comp: SemesterInfo }))]),
        _.flow([ PtmSelectors.getTimeline, _.map(_.merge({ icon: 'PTM', color: ptmColor, comp: PtmInfo }))]),
    ]),
    _.flatten,
    _.sortBy( d => -d.date)
])

const selectors = {
    getData,
    loaded: () => true,
}

const actions = {
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }