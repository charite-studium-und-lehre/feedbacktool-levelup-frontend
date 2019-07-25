import _ from 'lodash'
import SemesterInfo from '../../Exams/SemesterInfo'
import PtmInfo from '../../Exams/PtmInfo'
import StationsInfo from '../../Exams/StationsInfo'
import SemesterTimelineInfo from './SemesterInfo'
import PtmTimelineInfo from './PtmInfo'
import StationsTimelineInfo from './StationsInfo'
import { selectors as StationsSelectors, actions as StationsActions } from '../../Exams/Stations/Store'
import { selectors as SemesterSelectors, actions as SemesterActions } from '../../Exams/Semester/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../../Exams/Ptm/Store'

const graphs = state => [
    {
        name: 'semester',
        label: 'Semesterprüfung',
        data: SemesterSelectors.getTimeline(state),
        color: 120,
        info: SemesterInfo,
        timelineinfo: SemesterTimelineInfo,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: PtmSelectors.getTimeline(state),
        color: 240,
        info: PtmInfo,
        timelineinfo: PtmTimelineInfo,
    },
    {
        name: 'stations',
        label: 'Praktische Prüfung',
        data: StationsSelectors.getTimeline(state),
        color: 0,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]

const selectors = {
    getGraphs: graphs,
    loaded: () => true,
}

const actions = {
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }