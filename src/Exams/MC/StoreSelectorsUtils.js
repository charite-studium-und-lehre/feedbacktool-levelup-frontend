import {scaleLinear} from 'd3-scale'
import _             from 'lodash/fp'

export const getScale = kohortenPunkzahlen =>
    scaleLinear()
        .domain([0, kohortenPunkzahlen.length - 1])
        .range([100, 0])

export const calculateComparativePercentage = _.flow([
    _.over([
        getScale,
        (kohortenPunkzahlen, ergebnisPunkzahl) => [
            kohortenPunkzahlen.filter(d => d < ergebnisPunkzahl).length,
            kohortenPunkzahlen.filter(d => d <= ergebnisPunkzahl).length
        ]
    ]),
    ([scale, p]) => _.map(scale, p),
    _.mean,
    _.round
])

export const getPercent = ergebnis => ({
    ...ergebnis,
    percent: calculateComparativePercentage(ergebnis.kohortenPunktzahlen, ergebnis.ergebnisPunktzahl)
})

export const histogram = _.flow([
    _.groupBy(d => Math.floor(d / 5)),
    _.map(d => ({
        x: Math.floor(d[0] / 5) * 5,
        y: d.length
    }))
])

export const getHistogram = ergebnis => ({
    ...ergebnis,
    histogram: _.map(d => ({
        ...d,
        highlight: Math.floor(ergebnis.ergebnisPunktzahl / 5) * 5 === d.x
    }))(histogram(ergebnis.kohortenPunktzahlen))
})

export const getGraphData = ergebnis => ({
    ...ergebnis,
    graphData: ergebnis.kohortenPunktzahlen
                       .sort(_.subtract)
                       .map((d, i) => ({x: getScale(ergebnis.kohortenPunktzahlen)(i), y: d}))
})

export const findById = id => exams => exams[id]
export const getTimeline = exam => ({
    ...exam,
    link: `mcs/${exam.id}`
})
