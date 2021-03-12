import {overSome} from '../../Utils/utils'

export const stationsReducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const filter = filters => data => data.filter(overSome(filters.filter(f => f.selected).map(f => f.pred)))

export const toTimeline = exam => ({
    link: `stations/${exam.id}`,
    ...exam
})

