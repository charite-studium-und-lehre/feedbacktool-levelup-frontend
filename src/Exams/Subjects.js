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
    }
]

const SubjectsWithNumbers = () => Subjects.map( cat => ({ ...cat, subjects: cat.subjects.map( s => ({ title: s, questions: Math.floor(Math.random() * 20) }))}))
export default SubjectsWithNumbers