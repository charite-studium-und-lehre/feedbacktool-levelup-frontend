import {groupBy} from '../Utils/utils'
import {scaleBand} from 'd3-scale'
import {color as mcColor} from './MC/MC'
import {color as ptmColor} from './Ptm/Ptm'
import {color as stationsColor} from './Stations/Stations'
import {selectors as PtmSelectors} from './Ptm/Store'
import {selectors as MCSelectors} from './MC/Store'
import {selectors as StationsSelectors} from './Stations/Store'

export const graphs = state => [
    {
        name: 'mcs',
        data: toNavigationData(MCSelectors.getTimeline(state)),
        color: mcColor,
    },
    {
        name: 'ptms',
        data: toNavigationData(PtmSelectors.getTimeline(state)),
        color: ptmColor,
    },
    {
        name: 'stations',
        data: toNavigationData(StationsSelectors.getTimeline(state)),
        color: stationsColor,
    },
]

export const selected = (state = -1, action) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return action.payload.id
        default:
            return state
    }
}

export function getSemesters(state) {

    let exams = graphs(state);
    let semesters = [];

    for (let i = 0; i < exams.length; i++)
        for (let j = 0; j < exams[i].data.length; j++)
            semesters.push(exams[i].data[j].zeitsemester);

    semesters = [...new Set(semesters)];

    semesters.sort((a, b) => a.split(' ')[1] - b.split(' ')[1]);

    return semesters;
}

export function getById(state, id) {
    let exams = graphs(state), data = null;

    for (let i = 0; i < exams.length; i++)
        for (let j = 0; j < exams[i].data.length; j++)
            if (exams[i].data[j].id === id)
                data = exams[i].data[j];

    return data;
}

export function toNavigationData(exams) {

    let semesters = groupBy(exams, 'zeitsemester');
    let step1 = [], step2 = [];

    for (let zeitsemester in semesters) {
        const scale = scaleBand([0, semesters[zeitsemester].length - 1], [0, 1]);
        let group = semesters[zeitsemester].map(
            (semester, i) => ({
                ...semester,
                x: semester.zeitsemester,
                y: scale(i) + scale.bandwidth() * .5
            })
        );
        step1.push(group);
    }

    for (let i = 0; i < step1.length; i++)
        for (let j = 0; j < step1[i].length; j++)
            step2.push(step1[i][j]);

    return step2;
}
