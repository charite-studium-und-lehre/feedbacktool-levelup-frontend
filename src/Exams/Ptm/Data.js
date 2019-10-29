import { randomUniform } from 'd3-random'
import { scalePow } from 'd3-scale'
import _ from 'lodash/fp'
import seedrandom from 'seedrandom'

export const Subjects = [
    {
        title: "Theoretische Fächer",
        subjects: [
            { titel: 'Biochemie, Chemie, Molekularbiologie', code: 'S02' },
            { titel: 'Anatomie, Biologie', code: 'S03' },
            { titel: 'Med. Psychologie/Soziologie', code: 'S04' },
            { titel: 'Physiologie, Physik', code: 'S01' },
        ]
    },
    {
        title: "Querschnittsfächer",
        subjects: [
            { titel: 'Epidemiologie, med. Biometrie', code: 'Q01' },
            { titel: 'Hygiene, Mikrobiologie', code: 'F10' },
            { titel: 'Pathologie', code: 'F16' },
            { titel: 'Pharmakologie, Toxikologie', code: 'F17' },
            { titel: 'Radiologie, Nuklearmedizin', code: 'Q11' },
        ]
    },
    {
        title: "Klinische Fächer",
        subjects: [
            { titel: 'Allgemeinmedizin', code: 'F01' },
            { titel: 'Anästhesiologie, Notfall- und Intensivmedizin', code: 'F02' },
            { titel: 'Arbeits- und Sozialmedizin, Gesundheitswesen', code: 'F03' },
            { titel: 'Augenheilkunde', code: 'F04' },
            { titel: 'Chirurgie', code: 'F05' },
            { titel: 'Dermatologie, Venerologie', code: 'F06' },
            { titel: 'Frauenheilkunde und Geburtshilfe', code: 'F07' },
            { titel: 'Hals-Nasen-Ohrenheilkunde', code: 'F08' },
            { titel: 'Humangenetik', code: 'F09' },
            { titel: 'Innere Medizin', code: 'F11' },
            { titel: 'Kinderheilkunde', code: 'F12' },
            { titel: 'Klinische Chemie, Labordiagnostik', code: 'F13' },
            { titel: 'Naturheilverfahren, Physikalische Medizin', code: 'Q12' },
            { titel: 'Neurologie', code: 'F14' },
            { titel: 'Orthopädie', code: 'F15' },
            { titel: 'Psychiatrie, Psychosomatik', code: 'F18' },
            { titel: 'Rechtsmedizin', code: 'F20' },
            { titel: 'Urologie', code: 'F21' },
        ]
    },
]

const rnd = _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())])
const SubjectsWithNumbers = _.flow([rnd, random => Subjects.map( 
    cat => ({ 
        ...cat, 
        subjects: cat.subjects.map( s => ({
            gruppe: cat.title,
            ...s,
            maximalPunktzahl: Math.max(0, rnd(s.titel)(3,20) + random(0,4)),
        })).map(s => ({ 
            ...s, 
            ergebnisPunktzahl: random(0, s.maximalPunktzahl),
            durchschnittsPunktzahl: random(1, s.maximalPunktzahl)
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