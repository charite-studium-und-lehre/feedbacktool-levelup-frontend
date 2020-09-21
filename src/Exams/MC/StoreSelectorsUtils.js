import {scaleLinear} from 'd3-scale'
import _             from 'lodash/fp'

export const getScale = kp =>
    scaleLinear()
        .domain([0, kp.length - 1])
        .range([100, 0])

export const percent = _.flow([
    _.over([
        getScale,
        (kp, ergebnis) => [
            kp.filter(d => d < ergebnis).length,
            kp.filter(d => d <= ergebnis).length
        ]
    ]),
    ([scale, p]) => _.map(scale, p),
    _.mean,
    _.round
])

export const addPercent = ergebnis => ({
    ...ergebnis,
    percent: percent(ergebnis.kohortenPunktzahlen, ergebnis.ergebnisPunktzahl)
})

export const histogram = _.flow([
    _.groupBy(d => Math.floor(d / 5)),
    _.map(d => ({
        x: Math.floor(d[0] / 5) * 5,
        y: d.length
    }))
])

export const addHistogram = ergebnis => ({
    ...ergebnis,
    histogram: _.map(d => ({
        ...d,
        highlight: Math.floor(ergebnis.ergebnisPunktzahl / 5) * 5 === d.x
    }))(histogram(ergebnis.kohortenPunktzahlen))
})

export const addGraphData = ergebnis => ({
    ...ergebnis,
    graphData: ergebnis.kohortenPunktzahlen
                       .sort(_.subtract)
                       .map((d, i) => ({x: getScale(ergebnis.kohortenPunktzahlen)(i), y: d}))
})

export const findById = id => exams => exams[id]
export const toTimeline = exam => ({
    ...exam,
    link: `mcs/${exam.id}`
})
