import _ from 'lodash'

const characters = "abcdefghijklmnopqrstuvwxyz"
function createDetails() {
    return new Array(5).fill(0).map(d => ({
        label: _.sampleSize(characters.split(''), _.random(4,12)), 
        value: _.random(25,100)
    }))
}
const data = [
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

export default data.map(s => ({...s, mean: _.mean(s.details.map(d => d.details )) }))