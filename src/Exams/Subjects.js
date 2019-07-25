import _ from 'lodash/fp'
import seedrandom from 'seedrandom'
import { randomUniform } from 'd3-random'

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
            name: s,
            gesamt: Math.max(0, rnd(s)(3,20) + random(0,4)),
        })).map(s => ({ 
            ...s, 
            richtig: random(0, s.gesamt),
            durchschnitt: random(1, s.gesamt)
        }))
    }
))])

const flattenCategories = _.flatMap(c => c.subjects)

const percentCorrect = s => s.richtig / s.gesamt

const minQuestions = _.filter(s => s.gesamt >= 4)

const findMax = _.reduce((max, s) => 
!max ? s :
percentCorrect(s) > percentCorrect(max) 
? s 
: percentCorrect(s) === percentCorrect(max) 
? s.gesamt > max.gesamt 
? s 
: max 
: max, null)

const sort = _.sortBy(_.flow(percentCorrect, s => s * -1))

const strongestSubject = _.flow(flattenCategories, minQuestions, findMax)
const ranking = _.flow(flattenCategories, minQuestions, sort)

export default SubjectsWithNumbers
export { Subjects, strongestSubject, ranking }