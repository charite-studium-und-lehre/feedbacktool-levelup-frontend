import _ from 'lodash'
import SemesterInfo from './SemesterInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import SemesterTimelineInfo from '../Dashboard/Timeline/SemesterInfo'
import PtmTimelineInfo from '../Dashboard/Timeline/PtmInfo'
import StationsTimelineInfo from '../Dashboard/Timeline/StationsInfo'
import { TimelineData as StationsTimelineData } from './Stations/Data'
import { TimelineData as SemesterTimelineData } from './Semester/Data'
import { TimelineData as PtmTimelineData } from './Ptm/Data'

const n = 5
const graphs = {
    pointCount: n,
    data: [{
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
        data: PtmTimelineData,
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
]}

export default graphs