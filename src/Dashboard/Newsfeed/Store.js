import MCInfo from './MCInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import {selectors as ExamsSelectors, actions as ExamsActions} from '../../Exams/Store'
import {selectors as StationsSelectors} from '../../Exams/Stations/Store'
import {selectors as MCSelectors} from '../../Exams/MC/Store'
import {selectors as PtmSelectors} from '../../Exams/Ptm/Store'
import {color as stationsColor} from '../../Exams/Stations/Stations'
import {color as mcColor} from '../../Exams/MC/MC'
import {color as ptmColor} from '../../Exams/Ptm/Ptm'
import {flow, over, map, merge, groupBy} from '../../Utils/utils'

const getData = flow([
    over([
        flow([StationsSelectors.getTimeline, map(merge({icon: 'PP', color: stationsColor, comp: StationsInfo}))]),
        flow([MCSelectors.getTimeline, map(merge({icon: 'MC', color: mcColor, comp: MCInfo}))]),
        flow([PtmSelectors.getTimeline, map(merge({icon: 'PTM', color: ptmColor, comp: PtmInfo}))]),
    ]),
    array => array.flat(),
    array => array.sort((a, b) => ('' + a.periodeCode) - ('' + b.periodeCode)),
    array => array.reverse(),
    array => groupBy(array, 'zeitsemester'),
    object => Object.values(object),
])

const selectors = {
    getData,
    loaded: ExamsSelectors.loaded,
}

const actions = {
    load: ExamsActions.load
}

export {selectors, actions}
