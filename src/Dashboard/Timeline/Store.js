import SemesterInfo from '../../Exams/SemesterInfo'
import PtmInfo from '../../Exams/PtmInfo'
import StationsInfo from '../../Exams/StationsInfo'
import SemesterTimelineInfo from './SemesterInfo'
import PtmTimelineInfo from './PtmInfo'
import StationsTimelineInfo from './StationsInfo'
import { TimelineData as StationsTimelineData } from '../../Exams/Stations/Data'
import { TimelineData as SemesterTimelineData } from '../../Exams/Semester/Data'
import { selectors as PtmSelectors, actions as PtmActions } from '../../Exams/Ptm/Store'

const graphs = state => [
    {
        name: 'semester',
        label: 'Semesterprüfung',
        data: SemesterTimelineData,
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
        data: StationsTimelineData,
        color: 0,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]

const selectors = {
    getGraphs: graphs,
    loaded: PtmSelectors.loaded
}

const actions = {
    load: PtmActions.load
}

export { selectors, actions }