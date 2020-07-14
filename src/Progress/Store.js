import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'

const baseStore = BaseStore(identifier)

function moduleIsVisible(module) { return module.code < 200 || module.code >= 400; }

function getTotal(data) { return data.length; }

function getDone(data) {

    let count = 0;

    for (let i = 0; i < data.length; i++)
        if (data[i].erfuellt) count++;

    return count;
}

function groupBy(data, key) {

    return data.reduce((storage, item) => {

        var group = item[key] - 1;
        storage[group] = storage[group] || [];
        storage[group].push(item);
        return storage;

    }, []);
}

function transform(data) {

    data = data.meilensteine;
    data = groupBy(data, 'fachsemester');

    let out = [];

    for (let i = 0; i < data.length; i++) {

        let obj = {};
        let prereq = data[i].find(d => d.code === data[i][0].fachsemester + 300);

        obj.label = data[i][0].fachsemester + '. Fachsemester';

        if (prereq && !prereq.erfuellt) obj.prereq = false;
        else obj.prereq = true;

        obj.completed = data[i].find(d => d.code === data[i][0].fachsemester + 200).erfuellt;
        obj.entries = data[i].filter(moduleIsVisible).map(d => ({...d, link: d.format && `/exams/${d.format}s/${d.studiPruefungsId}`}));
        out.push(obj);
    }

    return out;
}

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: _.flow([
        baseStore.getItems,
        _.flatMap(d => d.entries),
        _.filter(moduleIsVisible),
        _.over([ getTotal, getDone ]),
        ([ total, done ]) => ({ total, done })
    ])
})

export const reducer = combineReducers(baseStore.withLoadedReducer(
    (state = {}, action) => {
        switch(action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return transform(action.payload)
            default:
                return state
        }
    }
))

export const actions = baseStore.withLoadAction(`studienfortschritt`)({})
