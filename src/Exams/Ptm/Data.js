import { randomUniform } from 'd3-random'
import _ from 'lodash/fp'
import seedrandom from 'seedrandom'

export const Subjects = [
    {
        title: "Theoretische Fächer",
        subjects: [
            { name: 'Biochemie, Chemie, Molekularbiologie', code: 'S02' },
            { name: 'Anatomie, Biologie', code: 'S03' },
            { name: 'Med. Psychologie/Soziologie', code: 'S04' },
            { name: 'Physiologie, Physik', code: 'S01' },
        ]
    },
    {
        title: "Querschnittsfächer",
        subjects: [
            { name: 'Epidemiologie, med. Biometrie', code: 'Q01' },
            { name: 'Hygiene, Mikrobiologie', code: 'F10' },
            { name: 'Pathologie', code: 'F16' },
            { name: 'Pharmakologie, Toxikologie', code: 'F17' },
            { name: 'Radiologie, Nuklearmedizin', code: 'Q11' },
        ]
    },
    {
        title: "Klinische Fächer",
        subjects: [
            { name: 'Allgemeinmedizin', code: 'F01' },
            { name: 'Anästhesiologie, Notfall- und Intensivmedizin', code: 'F02' },
            { name: 'Arbeits- und Sozialmedizin, Gesundheitswesen', code: 'F03' },
            { name: 'Augenheilkunde', code: 'F04' },
            { name: 'Chirurgie', code: 'F05' },
            { name: 'Dermatologie, Venerologie', code: 'F06' },
            { name: 'Frauenheilkunde und Geburtshilfe', code: 'F07' },
            { name: 'Hals-Nasen-Ohrenheilkunde', code: 'F08' },
            { name: 'Humangenetik', code: 'F09' },
            { name: 'Innere Medizin', code: 'F11' },
            { name: 'Kinderheilkunde', code: 'F12' },
            { name: 'Klinische Chemie, Labordiagnostik', code: 'F13' },
            { name: 'Naturheilverfahren, Physikalische Medizin', code: 'Q12' },
            { name: 'Neurologie', code: 'F14' },
            { name: 'Orthopädie', code: 'F15' },
            { name: 'Psychiatrie, Psychosomatik', code: 'F18' },
            { name: 'Rechtsmedizin', code: 'F20' },
            { name: 'Urologie', code: 'F21' },
        ]
    },
]

const rnd = _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())])
const SubjectsWithNumbers = _.flow([rnd, random => Subjects.map( 
    cat => ({ 
        ...cat, 
        subjects: cat.subjects.map( s => ({
            kategorie: cat.title,
            ...s,
            gesamt: Math.max(0, rnd(s.name)(3,20) + random(0,4)),
        })).map(s => ({ 
            ...s, 
            richtig: random(0, s.gesamt),
            durchschnitt: random(1, s.gesamt)
        }))
    }
)), _.flatMap(c => c.subjects)])

const semesters = ['1. Fachsemester', '2. Fachsemester', '3. Fachsemester', '4. Fachsemester', '5. Fachsemester']
const timesemesters = _.flatMap( y => [{ label: `SoSe 20${y}`, value: new Date(2000+y, 3, 1) }, { label: `WiSe 20${y}`, value: new Date(2000+y, 9, 1) }] )( _.range( 14, 19 ) )

const createResult = _.flow([
    _.over([
        _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())]),
        _.identity
    ]), 
    ([random, semester]) => ({
        alt: true,
        results: [
            [semester.split('.')[0]*semester.split('.')[0]*6],
            [30],
            [90] 
        ],
        means: [77, 22, 101],
        id: _.uniqueId(),
        name: semester,
        short: semester.substr(0,4) + 'S',
        fächer: SubjectsWithNumbers(semester),
        date: new Date(2013 + parseInt(semester.substr(0,1)), 6 + random(2, -1), 15 + random(20, -10)),
        zeitsemester: timesemesters[semester.split('.')[0]].label
    })
])

const Results = _.keyBy(r => r.id, _.map(createResult)(semesters))
export default Results