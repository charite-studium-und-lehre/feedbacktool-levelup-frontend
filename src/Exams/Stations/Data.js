import _ from 'lodash'

const data = [
    {
        exam: '2. Semester Teil 1',
        group: '2. Semester',
        date: new Date(2015, 6, 15),
        stations: [
            {
                name:'Notfall', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Eigenschutz',
                        value: 89,
                        mean: 73,
                    },
                    {
                        label: 'Bewusstseinsprüfung',
                        value: 74,
                        mean: 86,
                    },
                    {
                        label: 'Atmungsprüfung',
                        value: 66,
                        mean: 69,
                    },
                    {
                        label: 'Beatmung',
                        value: 90,
                        mean: 74,
                    },
                    {
                        label: 'Reanimation',
                        value: 61,
                        mean: 65,
                    },
                    {
                        label: 'Reihenfolge',
                        value: 96,
                        mean: 84,
                    },
                    {
                        label: 'Notruf',
                        value: 45,
                        mean: 80,
                    },
                ]
            },
            {
                name:'Abdomen', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Begrüßung',
                        value: 92,
                        mean: 86,
                    },
                    {
                        label: 'Händedesinfektion',
                        value: 95,
                        mean: 91,
                    },
                    {
                        label: 'Anamnese',
                        value: 75,
                        mean: 79,
                    },
                    {
                        label: 'Untersuchung',
                        value: 86,
                        mean: 71,
                    },
                    {
                        label: 'Gesamteindruck',
                        value: 86,
                        mean: 81,
                    },
                ]
            },
            {
                name:'Biochemie', 
                category: 'Theoretisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Funktion und Eigenschaften von Enzymen',
                    },
                    {
                        label: 'Fakentwissen',
                        value: 67,
                        mean: 78,
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: 76,
                        mean: 81,
                    },
                ]
            },
            {
                name: 'Anatomie / Biologie', 
                category: 'Theoretisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Grundlagen der Anatomie von Herz und Kreislauf',
                    },
                    {
                        label: 'Fakentwissen',
                        value: 87,
                        mean: 78,
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: 82,
                        mean: 71,
                    },
                ]
            },
        ]
    },
    {
        exam: '4. Semester Teil 2',
        group: '4. Semester',
        date: new Date(2017, 6, 15),
        stations: [
            {
                name:'COPD', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: 76,
                        mean: 81,
                    },
                    {
                        label: 'Pulsoxymetrie',
                        value: 86,
                        mean: 85,
                    },
                ]
            },
            {
                name:'Aphasie', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: 71,
                        mean: 75,
                    },
                    {
                        label: 'Untersuchung',
                        value: 55,
                        mean: 64,
                    },
                    {
                        label: 'Zusammenfassung',
                        value: 61,
                        mean: 74,
                    },
                    {
                        label: 'Sprachverhalten',
                        value: 43,
                        mean: 75,
                    },
                ]
            },
            {
                name:'Ohrenuntersuchung', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: 75,
                        mean: 71,
                    },
                    {
                        label: 'Untersuchung Ohr',
                        value: 84,
                        mean: 72,
                    },
                    {
                        label: 'Rinne-Weber-Test',
                        value: 86,
                        mean: 86,
                    },
                    {
                        label: 'Verdachtsdiagnose',
                        value: 95,
                        mean: 91,
                    },
                ]
            },
            {
                name:'akutes Nierenversagen', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: 61,
                        mean: 78,
                    },
                    {
                        label: 'Arbeitsdiagnose',
                        value: 71,
                        mean: 75,
                    },
                    {
                        label: 'Durchführung',
                        value: 64,
                        mean: 75,
                    },
                ]
            },
        ]
    },
    {
        exam: '4. Semester Teil 3',
        group: '4. Semester',
        date: new Date(2017, 6, 15),
        stations: [
            {
                name: 'Physiologie 1', 
                category: 'Theoretisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Säure-Basen-Haushalt',
                    },
                    {
                        label: 'Fakentwissen',
                        value: 87,
                        mean: 67,
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: 78,
                        mean: 71,
                    },
                ]
            },
            {
                name: 'Physiologie 2', 
                category: 'Theoretisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Motorik',
                    },
                    {
                        label: 'Fakentwissen',
                        value: 78,
                        mean: 71,
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: 86,
                        mean: 75,
                    },
                ]
            },
            {
                name: 'Anatomie', 
                category: 'Theoretisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Handgelenke',
                    },
                    {
                        label: 'Fakentwissen',
                        value: 61,
                        mean: 74,
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: 71,
                        mean: 79,
                    },
                ]
            },
            {
                name: 'Anatomie 2', 
                category: 'Theoretisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Muskeln der unteren Extremitäten',
                    },
                    {
                        label: 'Fakentwissen',
                        value: 57,
                        mean: 78,
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: 68,
                        mean: 75,
                    },
                ]
            },
        ]
    },
    // {
    //     exam: '9. Semester - OSCE',
    //     group: '9. Semester',
    //     stations: [
    //         {
    //             name: 'Schulterverband', 
    //             category: 'Klinisch', 
    //             details: [
    //                 {
    //                     label: 'Übernahme des Patienten',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Konzept und Vorgehen',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Versorgung',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Überprüfung',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Trigeminusneuralgie', 
    //             category: 'Klinisch', 
    //             details: [
    //                 {
    //                     label: 'Anamnese',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Untersuchung',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Arbeitsdiagnose',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Weiterführende Untersuchungen',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Bandscheibenvorfall', 
    //             category: 'Klinisch', 
    //             details: [
    //                 {
    //                     label: 'Befund/Verdachtsdiagnose',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Weitere bildgebende Diagnostik',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Schizophrenie', 
    //             category: 'Klinisch', 
    //             details: [
    //                 {
    //                     label: 'Anamnese',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Differentialdiagnosen/Verdachtsdiagnose',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Weiteres Vorgehen',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //             ]
    //         },
    //         {
    //             name: 'U2', 
    //             category: 'Klinisch', 
    //             details: [
    //                 {
    //                     label: 'Vorsorgeuntersuchungsheft',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Reflexe/Untersuchung',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'präventionsdiagnostische Maßnahmen',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Leichenschau', 
    //             category: 'Klinisch', 
    //             details: [
    //                 {
    //                     label: 'Leichenschau',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Leichenschauschein',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //                 {
    //                     label: 'Viktimologie',
    //                     value: _.random(25,100),
    //                     mean: _.random(5,90),
    //                 },
    //             ]
    //         },
    //     ]
    // }
]

const StationsData = data.map( e => ({
    ...e,
    stations: e.stations.map(s => ({
        ...s, 
        result: _.round(_.meanBy(s.details.filter( d => _.isNumber(d.value) ), 'value') ),
        mean: _.round(_.meanBy(s.details.filter( d => _.isNumber(d.mean) ), 'mean')),
    })),
})).map(e => ({
    ...e,
    result: _.round(_.meanBy( e.stations, 'result')),
    mean: _.round(_.meanBy( e.stations, 'mean')),
}))

export default StationsData

const TimelineData = _(StationsData)
    .groupBy(e => e.group)
    .map((exams, group) => ({ result: _.meanBy(exams, 'result'), mean: _.meanBy(exams, 'mean'), x: exams[0].date, label: group }))
    .value()
export { TimelineData }