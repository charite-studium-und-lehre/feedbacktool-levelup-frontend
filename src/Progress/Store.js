import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'

const baseStore = BaseStore(identifier)

function moduleIsVisible(module) { return module.code < 200 || module.code >= 400; }

function getDone(data) {

    let count = 0;

    data.forEach(entry => {
        if (entry.erfuellt) count++;
    });

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

    let output = [];

    data.forEach(element => {

        let object = {};
        let bedingung = element.find(d => d.code === element[0].fachsemester + 300);

        object.label = element[0].fachsemester + '. Fachsemester';

        if (bedingung && !bedingung.erfuellt) object.prereq = false;
        else object.prereq = true;

        object.completed = element.find(d => d.code === element[0].fachsemester + 200).erfuellt;

        object.entries = element
            .filter(moduleIsVisible)
            .map(d => ({
                ...d,
                link: (d.format && `/exams/${d.format}s/${d.studiPruefungsId}`)
            }));

        output.push(object);
    })

    return output;
}

function dashboard(state) {

    let temp = baseStore.getItems(state);

    temp = temp.flatMap(d => d.entries);
    temp = temp.filter(moduleIsVisible);

    return {total: temp.length, done: getDone(temp)};
}

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: dashboard,
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
