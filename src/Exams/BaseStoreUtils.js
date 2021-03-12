import { actions, selectors } from './Store'

export function identity(a) {
    return a;
}

function transformResult(data, identifier) {

    let exams = data.pruefungen;
    exams = exams.filter(exam => identifier.startsWith(exam.format));
    exams = exams.map(exam => ({
        ...exam,
        id: '' + exam.studiPruefungsId,
    }));

    return exams;
}

export function dataFetched(data, identifier, transform) {

    let exams = transformResult(data, identifier);

    exams = exams.map(transform);

    let examsById = {};
    for (let i = 0; i < exams.length; i++)
        examsById[exams[i].id] = exams[i];

    return examsById;
}

export function examsSelected(data, id) {

    let exams = [], examsById = {};

    for (let exam in data)
        exams.push({
            ...data[exam],
            selected: data[exam].id === id,
        });

    for (let i = 0; i < exams.length; i++)
        examsById[exams[i].id] = exams[i];

    return examsById;
}


export function withLoadAction(object) {

    object['load'] = () => actions.load();
    return object;
}


export function withLoadedSelector(object) {

    object['loaded'] = (state) => selectors.loaded(state);
    return object;
}
