import { randomUniform } from 'd3-random'
import { scalePow } from 'd3-scale'
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

const timesemesters = _.flatMap( y => [{ label: `SoSe ${y}`, value: y*10+1 }, { label: `WiSe ${y}`, value: y*10+2 }] )( _.range( 2016, 2019 ) )
const scale = scalePow().domain([20161,20192]).range([10, 150])
const createResult = _.flow([
    _.over([
        _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())]),
        _.identity
    ]), 
    ([random, timesemester]) => ({
        alt: true,
        gesamtErgebnis: {},
        results: [
            Math.round(scale(timesemester.value)),
            30,
            90 
        ],
        means: [77, 22, 101],
        studiPruefungsId: _.uniqueId(),
        format: 'ptm',
        name: timesemester.label,
        periodeCode: timesemester.value,
        short: timesemester.label.substr(0,1) + timesemester.label.substr(-2),
        faecher: SubjectsWithNumbers(timesemester.label),
        zeitsemester: timesemester.label
    })
])

const Results = _.map(createResult)(timesemesters)
export default Results