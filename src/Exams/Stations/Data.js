import _ from 'lodash'

const data = [
    {
        exam: '2. Semester',
        group: '2. Semester',
        stations: [
            {
                name:'Notfall', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Eigenschutz',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Bewusstseinsprüfung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Atmungsprüfung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Beatmung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Reanimation',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Reihenfolge',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Notruf',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name:'Abdomen', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Begrüßung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Händedesinfektion',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Untersuchung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Gesamteindruck',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name:'Biochemie', 
                category: 'Vorklinisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Funktion und Eigenschaften von Enzymen',
                    },
                    {
                        label: 'Fakentwissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Anatomie / Biologie', 
                category: 'Vorklinisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Grundlagen der Anatomie von Herz und Kreislauf',
                    },
                    {
                        label: 'Fakentwissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
        ]
    },
    {
        exam: '4. Semester 2. Teil',
        group: '4. Semester',
        stations: [
            {
                name:'COPD', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Pulsoxymetrie',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name:'Aphasie', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Untersuchung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenfassung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Sprachverhalten',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name:'Ohrenuntersuchung', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Untersuchung Ohr',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Rinne-Weber-Test',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Verdachtsdiagnose',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name:'akutes Nierenversagen', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Arbeitsdiagnose',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Durchführung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
        ]
    },
    {
        exam: '4. Semester 1. Teil',
        group: '4. Semester',
        stations: [
            {
                name: 'Physiologie 1', 
                category: 'Vorklinisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Säure-Basen-Haushalt',
                    },
                    {
                        label: 'Fakentwissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Physiologie 2', 
                category: 'Vorklinisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Motorik',
                    },
                    {
                        label: 'Fakentwissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Anatomie', 
                category: 'Vorklinisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Handgelenke',
                    },
                    {
                        label: 'Fakentwissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Anatomie 2', 
                category: 'Vorklinisch', 
                details: [
                    {
                        label: 'Thema',
                        value: 'Muskeln der unteren Extremitäten',
                    },
                    {
                        label: 'Fakentwissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Zusammenhangswissen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
        ]
    },
    {
        exam: '9. Semester - OSCE',
        group: '9. Semester',
        stations: [
            {
                name: 'Schulterverband', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Übernahme des Patienten',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Konzept und Vorgehen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Versorgung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Überprüfung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Trigeminusneuralgie', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Untersuchung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Arbeitsdiagnose',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Weiterführende Untersuchungen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Bandscheibenvorfall', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Befund/Verdachtsdiagnose',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Weitere bildgebende Diagnostik',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Schizophrenie', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Anamnese',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Differentialdiagnosen/Verdachtsdiagnose',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Weiteres Vorgehen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'U2', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Vorsorgeuntersuchungsheft',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Reflexe/Untersuchung',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'präventionsdiagnostische Maßnahmen',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
            {
                name: 'Leichenschau', 
                category: 'Klinisch', 
                details: [
                    {
                        label: 'Leichenschau',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Leichenschauschein',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                    {
                        label: 'Viktimologie',
                        value: _.random(25,100),
                        mean: _.random(5,90),
                    },
                ]
            },
        ]
    }
]

export default data.map( e => ({
    exam: e.exam,
    group: e.group,
    result: _.meanBy( e.stations, 'result'),
    stations: e.stations.map(s => ({
        ...s, 
        result: _.round(_.meanBy(s.details.filter( d => _.isNumber(d.value) ), 'value') ),
        mean: _.round(_.meanBy(s.details, 'mean')),
    }))
}))