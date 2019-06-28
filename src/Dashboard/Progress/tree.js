const tree = t => ({
    label: 'root',
    entries: [
        {
            label: t(`1. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: true,
                    link: '/exams/ptm/1. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: true,
                    link: '/exams/semester/1. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: true,
                },
            ]
        },
        {
            label: t(`2. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: true,
                    link: '/exams/ptm/2. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: true,
                    link: '/exams/semester/2. Fachsemester',
                },
                {
                    label: t('Praktische Prüfung'),
                    isLeaf: true,
                    done: true,
                    link: '/exams/stations/2. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: true,
                },
            ]
        },
        {
            label: t(`3. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: true,
                    link: '/exams/ptm/3. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: true,
                    link: '/exams/semester/3. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: true,
                },
                {
                    label: t('Erste Hilfe'),
                    isLeaf: true,
                    done: true,
                },
                {
                    label: t('Krankenpflegedienst'),
                    isLeaf: true,
                    done: true,
                },
            ]
        },
        {
            label: t(`4. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: true,
                    link: '/exams/ptm/4. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: false,
                    link: '/exams/semester/4. Fachsemester',
                },
                {
                    label: t('Praktische Prüfung'),
                    isLeaf: true,
                    done: true,
                    link: '/exams/stations/4. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
                {
                    label: t('Famulaturreife'),
                    isLeaf: true,
                    done: true,
                },
            ]
        },
        {
            label: t(`5. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: true,
                    link: '/exams/ptm/5. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: true,
                    link: '/exams/semester/5. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
        {
            label: t(`6. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: false,
                    link: '/exams/ptm/6. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: false,
                    link: '/exams/semester/6. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
                {
                    label: t('M1-Äquivalenz'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
        {
            label: t(`7. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: false,
                    link: '/exams/ptm/7. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: false,
                    link: '/exams/semester/7. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
        {
            label: t(`8. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: false,
                    link: '/exams/ptm/8. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: false,
                    link: '/exams/semester/8. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
        {
            label: t(`9. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: false,
                    link: '/exams/ptm/9. Fachsemester',
                },
                {
                    label: t('Semesterprüfung'),
                    isLeaf: true,
                    done: false,
                    link: '/exams/semester/9. Fachsemester',
                },
                {
                    label: 'OSCE',
                    isLeaf: true,
                    done: false,
                    link: '/exams/stations/9. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
        {
            label: t(`10. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: false,
                    link: '/exams/ptm/10. Fachsemester',
                },
                {
                    label: t('Anwesenheit'),
                    isLeaf: true,
                    done: false,
                },
                {
                    label: t('Schriftliches Staatsexamen (M2)'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
        {
            label: t(`11.-12. Fachsemester`),
            entries: [
                {
                    label: 'PTM',
                    isLeaf: true,
                    done: false,
                    link: '/exams/ptm/PJ',
                },
                {
                    label: 'PJ',
                    isLeaf: true,
                    done: false,
                },
                {
                    label: t('Mündlich-Praktisches Staatsexamen (M4)'),
                    isLeaf: true,
                    done: false,
                },
            ]
        },
    ]
})

export default tree