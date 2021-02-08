export function filterType(questions, type) {

    let filtered = [];

    for (let i = 0; i < questions.length; i++) {
        let found = false;

        for (let j = 0; j < filtered.length; j++) {
            if (filtered[j].code === questions[i][type].code) {
                found = true;
                break;
            }
        }

        if (!found) filtered.push(questions[i][type]);
    }

    filtered = filtered.map(e => ({
        label: e.titel,
        pred: question => e.code === question[type].code,
    }));

    return filtered;
}

export const filterDifficulty = [
    {
        label: 'schwer',
        pred: q => q.durchschnittRichtig < .4
    },
    {
        label: 'mittel',
        pred: q => q.durchschnittRichtig >= .4 && q.durchschnittRichtig <= .8
    },
    {
        label: 'leicht',
        pred: q => q.durchschnittRichtig > .8
    },
]

export const filterCorrectness = [
    {
        label: 'richtig beantwortet',
        pred: q => q.antworten.some( a => a.richtig && a.ausgewaehlt )
    },
    {
        label: 'falsch beantwortet',
        pred: q => q.antworten.some( a => !a.richtig && a.ausgewaehlt )
    },
]

export function bakeFilters(filters) {

    return filters.map(filter => {

        let temp = [
            ...filter.filter(f => f.selected).map(f => f.pred),
            () => filter.filter(f => f.selected).length === 0,
        ]

        let func = (item) => {
            for (let i = 0; i < temp.length; i++)
                if (temp[i](item))
                    return true;

            return false;
        }

        return func;
    })
}

export function filterAll(question, filters) {

    for (let i = 0; i < filters.length; i++)
        if (!filters[i](question))
            return false;

    return true;
}
