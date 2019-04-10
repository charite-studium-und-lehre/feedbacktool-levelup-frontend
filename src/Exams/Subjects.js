import fp from 'lodash/fp'

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

const SubjectsWithNumbers = () => Subjects.map( 
    cat => ({ 
        ...cat, 
        subjects: cat.subjects.map( s => ({ 
            title: s,
            questions: fp.random(1,20),
        })).map(s => ({ 
            ...s, 
            correct: fp.random(1, s.questions),
            mean: fp.random(1, s.questions)
        }))
    }
))

const flattenCategories = fp.flatMap(c => c.subjects)

const percentCorrect = s => s.correct / s.questions

const minQuestions = fp.filter(s => s.questions >= 4)

const findMax = fp.reduce((max, s) => 
!max ? s :
percentCorrect(s) > percentCorrect(max) 
? s 
: percentCorrect(s) === percentCorrect(max) 
? s.questions > max.questions 
? s 
: max 
: max, null)

const sort = fp.sortBy(fp.flow(percentCorrect, s => s * -1))

const strongestSubject = fp.flow(flattenCategories, minQuestions, findMax)
const ranking = fp.flow(flattenCategories, minQuestions, sort)

export default SubjectsWithNumbers
export { Subjects, strongestSubject, ranking }