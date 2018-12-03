import _ from 'lodash'

const data = [
    {
        name:'Notfall', 
        exam: '2. Semester', 
        category: 'Klinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:'Abdomen', 
        exam: '2. Semester', 
        category: 'Klinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:'Biochemie', 
        exam: '2. Semester', 
        category: 'Vorklinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:_.sample(['Anatomie / Biologie', 'Med. Soziologie / Sozialmedizin, Med. Psychologie']), 
        exam: '2. Semester', 
        category: 'Vorklinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:'COPD', 
        exam: '4. Semester', 
        category: 'Klinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:'Aphasie', 
        exam: '4. Semester', 
        category: 'Klinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:'Ohren', 
        exam: '4. Semester', 
        category: 'Klinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name:'akutes Nierenversagen', 
        exam: '4. Semester', 
        category: 'Klinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name: 'Physiologie 1', 
        exam: '4. Semester', 
        category: 'Vorklinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name: 'Physiologie 2', 
        exam: '4. Semester', 
        category: 'Vorklinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name: 'Anatomie', 
        exam: '4. Semester', 
        category: 'Vorklinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
    {
        name: _.sample(['Anatomie 2', 'Biologie']), 
        exam: '4. Semester', 
        category: 'Vorklinisch', 
        result: _.random(25, 95), 
        mean: _.random(45,75)
    },
]

export default data