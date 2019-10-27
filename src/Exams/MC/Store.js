import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import { scaleLinear } from 'd3-scale'
import { minQuestions } from '../../Utils/Constants'
import BaseStore from '../BaseStore'
import { reducer as questionsReducer, identifier as questionsIdentifier } from './Questions/Store'

export const identifier = 'mcs'
const baseStore = BaseStore(identifier)

const getScale = kp => scaleLinear().domain([0,kp.length-1]).range([100,0])
const percent = _.flow([
    _.over([
        getScale,
        (kp, ergebnis) => ([kp.filter(d => d < ergebnis).length, kp.filter(d => d <= ergebnis).length])
    ]),
    ([scale, p]) => _.map(scale, p),
    _.mean, 
    _.round, 
])
const addPercent = ergebnis => ({ 
    ...ergebnis,
    percent: percent(ergebnis.kohortenPunktzahlen, ergebnis.ergebnisPunktzahl)
})

const histogram = _.flow([
    _.groupBy(d => Math.floor(d / 5)),
    _.map(d => 
        ({
            x: Math.floor(d[0] / 5) * 5, 
            y: d.length,
        })
    )
])
const addHistogram = ergebnis => ({
    ...ergebnis,
    histogram: _.map( 
        d => ({ ...d, highlight: Math.floor(ergebnis.ergebnisPunktzahl / 5) * 5 === d.x })
    )(histogram(ergebnis.kohortenPunktzahlen))
})

const addGraphData = ergebnis => ({
    ...ergebnis,
    graphData: ergebnis.kohortenPunktzahlen.sort(_.subtract).map( (d,i) => ({ x: getScale(ergebnis.kohortenPunktzahlen)(i), y: d }))
})

const findById = id => exams => exams[id]

const toTimeline = exam => ({
    ...exam,
    link: `mc/${exam.id}`,
})
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

const getById = (state, id) => _.flow([ baseStore.getItems, findById(id)])(state)
const getTotalsData = _.flow([ getById, e => e.gesamtErgebnis, addPercent, addHistogram, addGraphData ])
const getSubjectsTotals = _.flow([ baseStore.getItems, _.flatMap( i => i.faecher ), _.groupBy(f => f.code), 
    _.map( g => ({ ...g[0], correct: _.sumBy('ergebnisPunktzahl')(g), total: _.sumBy('maximalPunktzahl')(g) }))])

const getRanking = _.flow([ getSubjectsTotals, _.filter(s => s.total >= minQuestions), _.sortBy([ s => -s.correct / s.total, s => -s.total ]) ])

export const selectors = baseStore.withLoadedSelector({
    getStore: baseStore.getStore,
    getById,
    strongestSubject: _.flow([getRanking, _.first]),
    getRanking,
    getSubjectsTotals,
    getTimeline,
    getTotalsData,
})

export const actions = baseStore.withLoadAction({})

export const reducer = combineReducers({ [questionsIdentifier]: questionsReducer, items: _.compose([ baseStore.withSelectReducer, baseStore.withLoadedReducer() ])(( state = {}, action ) => {
    switch (action.type) {
        default:
            return state
    }
})})