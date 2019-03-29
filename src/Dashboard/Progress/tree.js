import _ from 'lodash'

const tree = {
    label: 'root',
    entries: [
        {
            label: `1. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/1. Fachsemester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `2. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/2. Fachsemester',
                },
                {
                    label: 'Praktische Prüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/stations/2. Semester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `3. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/3. Fachsemester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Erste Hilfe',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Krankenpflegedienst',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `4. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/4. Fachsemester',
                },
                {
                    label: 'Praktische Prüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/stations/4. Semester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Famulaturreife',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `5. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/5. Fachsemester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `6. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/6. Fachsemester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'M1-Äquivalenz',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `7. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/7. Fachsemester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `8. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/8. Fachsemester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `9. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Semesterprüfung',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/semester/9. Fachsemester',
                },
                {
                    label: 'OSCE',
                    isLeaf: true,
                    done: _.random(1),
                    link: '/exams/stations/9. Semester',
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `10. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Anwesenheit',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Schriftliches Staatsexamen (M2)',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
        {
            label: `11.-12. Fachsemester`,
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'PJ',
                    isLeaf: true,
                    done: _.random(1),
                },
                {
                    label: 'Mündlich-Praktisches Staatsexamen (M4)',
                    isLeaf: true,
                    done: _.random(1),
                },
            ]
        },
    ]
}

export default tree