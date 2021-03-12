import {scaleLinear} from 'd3-scale'

export const getScale = kohortenPunkzahlen =>
    scaleLinear()
        .domain([0, kohortenPunkzahlen.length - 1])
        .range([100, 0])

export const calculateComparativePercentage = (kohorten, ergebnis) => {

    const result = [
        kohorten.filter(d => d < ergebnis).length,
        kohorten.filter(d => d <= ergebnis).length
    ];

    return Math.round(result
        .map(getScale(kohorten))
        .reduce((acc, val) => acc = .5 * (acc + val)));
}

export const getPercent = ergebnis => ({
    ...ergebnis,
    percent: calculateComparativePercentage(ergebnis.kohortenPunktzahlen, ergebnis.ergebnisPunktzahl)
})

export const histogram = (kohorten) => {

    let groups = {};

    kohorten.forEach(number => {
        let key = Math.floor(number / 5);
        if (!groups[key]) groups[key] = [];
        groups[key].push(number);
    })

    return Object.values(groups).map(d => ({
        x: Math.floor(d[0] / 5) * 5,
        y: d.length
    }))
}

export const getHistogram = ergebnis => ({
    ...ergebnis,
    histogram: (histogram(ergebnis.kohortenPunktzahlen)).map(d => ({
        ...d,
        highlight: Math.floor(ergebnis.ergebnisPunktzahl / 5) * 5 === d.x
    }))
})

export const getGraphData = ergebnis => ({
    ...ergebnis,
    graphData: ergebnis.kohortenPunktzahlen
                   .sort((a, b) => a - b)
                   .map((d, i) => ({x: getScale(ergebnis.kohortenPunktzahlen)(i), y: d}))
})

export const getTimeline = exam => ({
    ...exam,
    link: `mcs/${exam.id}`
})

export const getTotals = (ergebnis) =>
    getGraphData(getHistogram(getPercent(ergebnis)))
