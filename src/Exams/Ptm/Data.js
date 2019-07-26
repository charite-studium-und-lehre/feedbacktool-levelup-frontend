import { randomUniform } from 'd3-random'
import _ from 'lodash/fp'
import seedrandom from 'seedrandom'

const Subjects = [
    {
        title: "Theoretische Fächer",
        subjects: ["Anatomie, Biologie",
            "Biochemie, Chemie, Molekularbiologie",
            "Med. Psychologie/Soziologie",
            "Physiologie, Physik"
        ]
    },
    {
        title: "Querschnittsfächer",
        subjects: [
            "Epidemiologie, med. Biometrie",
            "Hygiene, Mikrobiologie",
            "Pathologie",
            "Pharmakologie, Toxikologie",
            "Radiologie, Nuklearmedizin"
        ]
    },
    {
        title: "Klinische Fächer",
        subjects: [
            "Allgemeinmedizin",
            "Anästhesiologie, Notfall- und Intensivmedizin",
            "Arbeits- und Sozialmedizin, Gesundheitswesen",
            "Augenheilkunde",
            "Chirurgie",
            "Dermatologie, Venerologie",
            "Frauenheilkunde und Geburtshilfe",
            "Hals-Nasen-Ohrenheilkunde",
            "Humangenetik",
            "Innere Medizin",
            "Kinderheilkunde",
            "Klinische Chemie, Labordiagnostik",
            "Naturheilverfahren, Physikalische Medizin",
            "Neurologie",
            "Orthopädie",
            "Psychiatrie, Psychosomatik",
            "Rechtsmedizin",
            "Urologie"
        ]
    },
]

const rnd = _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())])
const SubjectsWithNumbers = _.flow([rnd, random => Subjects.map( 
    cat => ({ 
        ...cat, 
        subjects: cat.subjects.map( s => ({
            kategorie: cat.title,
            name: s,
            gesamt: Math.max(0, rnd(s)(3,20) + random(0,4)),
        })).map(s => ({ 
            ...s, 
            richtig: random(0, s.gesamt),
            durchschnitt: random(1, s.gesamt)
        }))
    }
)), _.flatMap(c => c.subjects)])

const semesters = ['1. Fachsemester', '2. Fachsemester', '3. Fachsemester', '4. Fachsemester', '5. Fachsemester']
const createResult = _.flow([
    _.over([
        _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())]),
        _.identity
    ]), 
    ([random, semester]) => ({
        alt: true,
        results: [
            [ 83],
            [30],
            [90] 
        ],
        means: [77, 22, 101],
        semester,
        short: semester.substr(0,4) + 'S',
        fächer: SubjectsWithNumbers(semester),
        date: new Date(2013 + parseInt(semester.substr(0,1)), 6 + random(2, -1), 15 + random(20, -10)),
    })
])

const Results = _.keyBy(r => r.semester, _.map(createResult)(semesters))
export default Results