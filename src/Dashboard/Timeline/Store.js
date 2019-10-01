import _ from 'lodash/fp'
import SemesterInfo from '../../Exams/SemesterInfo'
import PtmInfo from '../../Exams/PtmInfo'
import StationsInfo from '../../Exams/StationsInfo'
import SemesterTimelineInfo from './SemesterInfo'
import PtmTimelineInfo from './PtmInfo'
import StationsTimelineInfo from './StationsInfo'
import { selectors as StationsSelectors, actions as StationsActions } from '../../Exams/Stations/Store'
import { selectors as SemesterSelectors, actions as SemesterActions } from '../../Exams/Semester/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../../Exams/Ptm/Store'
import { color as semesterColor } from '../../Exams/Semester/Semester'
import { color as ptmColor } from '../../Exams/Ptm/Ptm'
import { color as stationsColor } from '../../Exams/Stations/Stations'

const graphs = state => [
    {
        name: 'semester',
        label: 'Semesterprüfung',
        data: SemesterSelectors.getTimeline(state),
        color: semesterColor,
        info: SemesterInfo,
        timelineinfo: SemesterTimelineInfo,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: PtmSelectors.getTimeline(state),
        color: ptmColor,
        info: PtmInfo,
        timelineinfo: PtmTimelineInfo,
    },
    {
        name: 'stations',
        label: 'Praktische Prüfung',
        data: StationsSelectors.getTimeline(state),
        color: stationsColor,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]

const getByExam = exam => graphs => graphs.find( g => g.name === exam )
const getById = id => graph => graph.data.find( d => d.id === id )

const selectors = {
    getGraphs: graphs,
    loaded: () => true,
    getByExamAndSemester: (exam = 'semester', id) => _.flow([ graphs, getByExam(exam), getById(id) ])
}

const actions = {
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }