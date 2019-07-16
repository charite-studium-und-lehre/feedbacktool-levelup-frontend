import _ from 'lodash/fp'
import { randomUniform } from 'd3-random'
import seedrandom from 'seedrandom'
import Subjects from '../Subjects'

const semesters = ['1. Fachsemester', '2. Fachsemester', '3. Fachsemester', '4. Fachsemester', '5. Fachsemester']
const createResult = _.flow([
    _.over([
        _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())]),
        _.identity
    ]), 
    ([rng, semester]) => ({
        alt: true,
        results: [
            [ 83],
            [30],
            [90] 
        ],
        means: [77, 22, 101],
        semester,
        short: semester.substr(0,4) + 'S',
        fächer: Subjects(semester)
    })
])
const Results = _.keyBy(r => r.semester, _.map(createResult)(semesters))

const getStore = state => state.exams.ptms
const getBySemester = (state, semester) => getStore(state)[semester]
const flattenCategories = _.flatMap(c => c.subjects)
const getSubject = subject => _.flow([_.find({'name': subject}), _.defaultTo({})])
const getFächer = ptm => ptm.fächer
export const selectors = {
    getSubjectByName: (state, semester, subject) => _.flow([getBySemester, getFächer, flattenCategories, getSubject(subject)])(state, semester),
    getAllForSubject: (state, subject) => 
    _.flow([
        getStore, _.map(_.over([ptm => ({short: ptm.short}), _.flow([getFächer, flattenCategories, getSubject(subject)])])),
        _.map(_.mergeAll)
    ])(state),
    getBySemester
}

const random = randomUniform.source(seedrandom('foo'))
function randomData(n = 5) {
    return _.range(0, n).map(i => ({
        x: new Date(2018 - i, 6 + random(2, -1)(), 15 + random(20, -10)()),
        result: (n-i+1)/6*50,
        mean: random(25, 40)(),
        label: `${n-i}. Semester`
    }))
}
export const TimelineData = randomData()

export const actions = {}
  
export function reducer(state = Results, action) {
    switch (action.type) {
        default:
        return state
    }
}