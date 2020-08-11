import _ from "lodash/fp";
import {combineReducers} from "redux";
import {scaleLinear} from "d3-scale";
import BaseStore from "../BaseStore";
import {identifier as questionsIdentifier, reducer as questionsReducer} from "./Questions/Store";


export const identifier = "mcs";
const baseStore = BaseStore(identifier);

const getScale = kohortenPunktzahlen =>
    scaleLinear()
        .domain([0, kohortenPunktzahlen.length - 1])
        .range([100, 0]);

const calculateComparativePercentage = _.flow([
    _.over([
        getScale,
        (kohortenPunkzahlen, ergebnisPunkzahl) => [
            kohortenPunkzahlen.filter(kohortenPunktzahl => kohortenPunktzahl < ergebnisPunkzahl).length,
            kohortenPunkzahlen.filter(kohortenPunktzahl => kohortenPunktzahl <= ergebnisPunkzahl).length
        ]
    ]),
    ([scale, p]) => _.map(scale, p),
    _.mean,
    _.round
]);

const getPercent = ergebnis => {
    const {kohortenPunktzahlen, ergebnisPunktzahl} = ergebnis;
    return {
        percent: calculateComparativePercentage(kohortenPunktzahlen, ergebnisPunktzahl)
    };
};

const histogram = kohortenPunktzahlen => {
    let groupedKohortenPunktzahlen = kohortenPunktzahlen.map(kohortenPunktzahl => ({
        group: Math.floor(kohortenPunktzahl / 5) * 5,
        value: kohortenPunktzahl
    })).reduce((r, a) => {
        r[a.group] = [...r[a.group] || [], a.value];
        return r;
    }, {});

    return Object.entries(groupedKohortenPunktzahlen).map(group => ({
        x: group[0],
        y: group[1].length
    }));
};

const getHistogram = ergebnis => {
    const {kohortenPunktzahlen, ergebnisPunktzahl} = ergebnis;
    const ownGroup = Math.floor(ergebnisPunktzahl / 5) * 5;
    return {
        histogram: histogram(kohortenPunktzahlen).map(group => {
            return {
                ...group,
                highlight: ownGroup.toString() === group.x
            };
        })
    };
};

const getGraphData = ergebnis => {
    const {kohortenPunktzahlen} = ergebnis;
    return {
        graphData: kohortenPunktzahlen
            .sort(_.subtract)
            .map((d, i) => ({x: getScale(kohortenPunktzahlen)(i), y: d}))
    };
};

const getTimeline = (state, _) => {
    const pruefungen = baseStore.getItems(state);
    const pruefungenWithLink = Object.fromEntries(Object.entries(pruefungen).map(([key, value]) => [key, ({
        ...value,
        link: `mcs/${value.id}`
    })]));
    return pruefungenWithLink;

};

const getPruefungById = (state, id) => baseStore.getItems(state)[id];

const getTotalsData = (state, id) => {
    let pruefungGesamtErgebnis = getPruefungById(state, id).gesamtErgebnis;
    return {
        ...pruefungGesamtErgebnis,
        ...getPercent(pruefungGesamtErgebnis),
        ...getHistogram(pruefungGesamtErgebnis),
        ...getGraphData(pruefungGesamtErgebnis)
    };
};

export const selectors = baseStore.withLoadedSelector({
    getStore: baseStore.getStore,
    getById: getPruefungById,
    getTimeline,
    getTotalsData
});

export const actions = baseStore.withLoadAction({});

export const reducer = combineReducers({
    [questionsIdentifier]: questionsReducer,
    items: _.compose([
        baseStore.withSelectReducer,
        baseStore.withLoadedReducer()
    ])((state = {}, action) => {
        switch (action.type) {
            default:
                return state;
        }
    })
});
