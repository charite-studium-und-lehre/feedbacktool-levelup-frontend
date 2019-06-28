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
        fächer: Subjects(semester)
    })
])
const Results = _.fromPairs(_.zip(semesters, _.map(createResult)(semesters)))

const getResult = semester => Results[semester]
const flattenCategories = _.flatMap(c => c.subjects)
const getSubject = subject => _.flow([_.find({'name': subject}), _.defaultTo({})])
const getFächer = ptm => ptm.fächer
const selectors = {
    getSubjectByName: (state, semester, subject) => _.flow([getResult, getFächer, flattenCategories, getSubject(subject)])(semester),
    getAllForSubject: (state, subject) => 
    _.flow([
        _.map(getResult), _.map(getFächer), _.map(flattenCategories), _.map(getSubject(subject)),
        _.zip(semesters.map(s => ({semester: s}))),
        _.map(_.mergeAll)
    ])(semesters),
    getBySemester: (state, semester) => getResult(semester)
    //.[{x: 'WS 15', y0: 0, y1: 10}, {x: 'SS 16', y0: 0, y1: 15}]
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
const TimelineData = randomData()
export { TimelineData, selectors }