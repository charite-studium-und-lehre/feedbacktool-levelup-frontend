import _ from 'lodash/fp'
import MCInfo from './MCInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import { selectors as ExamsSelectors, actions as ExamsActions } from '../../Exams/Store'
import { selectors as StationsSelectors } from '../../Exams/Stations/Store'
import { selectors as MCSelectors } from '../../Exams/MC/Store'
import { selectors as PtmSelectors } from '../../Exams/Ptm/Store'
import { color as mcColor } from '../../Exams/MC/MC'
import { color as ptmColor } from '../../Exams/Ptm/Ptm'
import { color as stationsColor } from '../../Exams/Stations/Stations'

const getData = _.flow([
    _.over([ 
        _.flow([ StationsSelectors.getTimeline, _.map(_.merge({ icon: 'PP', color: stationsColor, comp: StationsInfo }))]),
        _.flow([ MCSelectors.getTimeline, _.map(_.merge({ icon: 'MC', color: mcColor, comp: MCInfo }))]),
        _.flow([ PtmSelectors.getTimeline, _.map(_.merge({ icon: 'PTM', color: ptmColor, comp: PtmInfo }))]),
    ]),
    _.flatten,
    _.sortBy( g => '' + g.periodeCode ),
    _.reverse,
    _.groupBy( d => d.zeitsemester ),
    _.values,
])

const selectors = {
    getData,
    loaded: ExamsSelectors.loaded,
}

const actions = {
    load: ExamsActions.load
}

export { selectors, actions }