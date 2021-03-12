import {minQuestions} from '../../Utils/Constants'

export const getSubject = (ptm, subject) => {
    let subjects = ptm.faecher;
    let fach = {};
    for (let i = 0; i < subjects.length; i++)
        if (subjects[i].titel === subject)
            fach = subjects[i];
    return fach;
}

export const toTimeline = ptm => ({
    ...ptm,
    link: `ptms/${ptm.id}`
})


export const getRanking = (ptm) => {
    let subjects = ptm.faecher.filter(fach => fach.maximalPunktzahl >= minQuestions);
    subjects.sort((a, b) => b.maximalPunktzahl - a.maximalPunktzahl);
    subjects.sort((a, b) =>
        b.ergebnisRichtigPunktzahl / b.maximalPunktzahl -
        a.ergebnisRichtigPunktzahl / a.maximalPunktzahl
    );
    return subjects;
}

export const getAllForSubject = (ptms, subject) =>
    ptms.map(ptm => ({
        ...getSubject(ptm, subject),
        zeitsemester: ptm.zeitsemester
    }))

export const getLatest = (ptms) => {
    let last = {periodeCode: 0};
    for (let i = 0; i < ptms.length; i++)
        if (ptms[i].periodeCode > last.periodeCode)
            last = ptms[i];
    return last;
}
