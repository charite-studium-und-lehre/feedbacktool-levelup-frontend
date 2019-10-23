import DummyQuestions from './DummyQuestions'
const Results = { '1': DummyQuestions }

export const identifier = 'questions'

export const actions = { load: () => ({ type: 'FOOBAR' })}

const getById = (state, id) => state.exams.items.mcs[identifier][id]
const loaded = (state, { match: { params: { test }}}) => getById(state, test)

export const selectors = {
    loaded: () => true,
    getById: state => getById(state, 1),
}

export const reducer = (state = Results, action) => {
    switch(action.type) {
        default:
            return state
    }
}