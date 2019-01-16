import _ from 'lodash'

const characters = "abcdefghijklmnopqrstuvwxyz"
function createDetails() {
    return new Array(5).fill(0).map(d => ({
        label: _.sampleSize(characters.split(''), _.random(4,12)).join(''),
        value: _.random(25,100)
    }))
}
const data = [
    {
        exam: '2. Semester',
        stations: [
            {
                name:'Notfall', 
                exam: '2. Semester', 
                category: 'Klinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name:'Abdomen', 
                exam: '2. Semester', 
                category: 'Klinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name:'Biochemie', 
                exam: '2. Semester', 
                category: 'Vorklinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name:_.sample(['Anatomie / Biologie', 'Med. Soziologie / Sozialmedizin, Med. Psychologie']), 
                exam: '2. Semester', 
                category: 'Vorklinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
        ]
    },
    {
        exam: '4. Semester 2. Teil',
        stations: [
            {
                name:'COPD', 
                exam: '4. Semester', 
                category: 'Klinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name:'Aphasie', 
                exam: '4. Semester', 
                category: 'Klinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name:'Ohren', 
                exam: '4. Semester', 
                category: 'Klinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name:'akutes Nierenversagen', 
                exam: '4. Semester', 
                category: 'Klinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
        ]
    },
    {
        exam: '4. Semester 1. Teil',
        stations: [
            {
                name: 'Physiologie 1', 
                exam: '4. Semester', 
                category: 'Vorklinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name: 'Physiologie 2', 
                exam: '4. Semester', 
                category: 'Vorklinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name: 'Anatomie', 
                exam: '4. Semester', 
                category: 'Vorklinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
            {
                name: _.sample(['Anatomie 2', 'Biologie']), 
                exam: '4. Semester', 
                category: 'Vorklinisch', 
                result: _.random(25, 95),
                details: createDetails()
            },
        ]
    }
]

export default data.map( e => ({
    exam: e.exam,
    result: _.mean( e.stations.map(s => s.result) ),
    stations: e.stations.map(s => ({...s, mean: _.mean(s.details.map(d => d.value )) }))
}))