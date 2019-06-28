import fp from 'lodash/fp'
import seedrandom from 'seedrandom'
import { randomUniform } from 'd3-random'

const Subjects = [
    {
        title: "Vorklinische Fächer",
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

const SubjectsWithNumbers = fp.flow([seed => randomUniform.source(seedrandom(seed)), random => (a,b) => fp.round(random(a,b)()), random => Subjects.map( 
    cat => ({ 
        ...cat, 
        subjects: cat.subjects.map( s => ({ 
            name: s,
            gesamt: random(1,20),
        })).map(s => ({ 
            ...s, 
            richtig: random(1, s.gesamt),
            durchschnitt: random(1, s.gesamt)
        }))
    }
))])

const flattenCategories = fp.flatMap(c => c.subjects)

const percentCorrect = s => s.richtig / s.gesamt

const minQuestions = fp.filter(s => s.gesamt >= 4)

const findMax = fp.reduce((max, s) => 
!max ? s :
percentCorrect(s) > percentCorrect(max) 
? s 
: percentCorrect(s) === percentCorrect(max) 
? s.gesamt > max.gesamt 
? s 
: max 
: max, null)

const sort = fp.sortBy(fp.flow(percentCorrect, s => s * -1))

const strongestSubject = fp.flow(flattenCategories, minQuestions, findMax)
const ranking = fp.flow(flattenCategories, minQuestions, sort)

export default SubjectsWithNumbers
export { Subjects, strongestSubject, ranking }