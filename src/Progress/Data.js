const tree = [
        {
            beschreibung: `1. Fachsemester`,
            completed: true,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                    link: '/exams/semester/1',
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `2. Fachsemester`,
            completed: true,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                    link: '/exams/semester/3',
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `3. Fachsemester`,
            completed: true,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                    link: '/exams/semester/4',
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
                {
                    beschreibung: 'Erste Hilfe',
                    code: 20,
                    erfuellt: true,
                },
                {
                    beschreibung: 'Pflegepraktikum',
                    code: 30,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `4. Fachsemester`,
            completed: true,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                    link: '/exams/semester/5',
                },
                {
                    beschreibung: 'Praktische Prüfung',
                    code: 70,
                    erfuellt: true,
                    link: '/exams/stations/8',
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
                {
                    beschreibung: 'Famulaturreife',
                    code: 40,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `5. Fachsemester`,
            completed: true,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                    link: '/exams/semester/6',
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
                {
                    beschreibung: 'Hausarbeit',
                    code: 10,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `6. Fachsemester`,
            completed: false,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                    link: '/exams/semester/7',
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: false,
                },
                {
                    beschreibung: 'M1-Äquivalenz',
                    code: 50,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `7. Fachsemester`,
            completed: true,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: true,
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `8. Fachsemester`,
            completed: false,
            prereq: true,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: false,
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: true,
                },
            ]
        },
        {
            beschreibung: `9. Fachsemester`,
            completed: false,
            prereq: false,
            entries: [
                {
                    beschreibung: 'MC',
                    code: 401,
                    erfuellt: false,
                },
                {
                    beschreibung: 'OSCE',
                    erfuellt: false,
                    code: 70,
                },
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: false,
                },
            ]
        },
        {
            beschreibung: `10. Fachsemester`,
            completed: false,
            prereq: false,
            entries: [
                {
                    beschreibung: 'Anwesenheit',
                    code: 101,
                    erfuellt: false,
                },
                {
                    beschreibung: 'Voraussetzungen für Schriftliches Staatsexamen (M2)',
                    code: 60,
                    erfuellt: false,
                },
            ]
        }
    ]

export default tree