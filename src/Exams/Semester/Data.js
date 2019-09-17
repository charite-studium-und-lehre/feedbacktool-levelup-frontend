import _ from 'lodash'
import fp from 'lodash/fp'
import { scaleLinear } from 'd3-scale'
import { randomNormal, randomUniform } from 'd3-random'
import seedrandom from 'seedrandom'

import { Subjects } from '../Ptm/Data'

const subjects = _.range(0,10).map(() => _.shuffle(fp.flatMap(c => c.subjects, Subjects)))
/*{ 
    1: [ {code: 'S02b', name: 'Biochemie/ Molekularbiologie', count: 67},
    {code: 'FÜ', name: 'fächerübergreifend', count: 35},
    {code: 'S01b', name: 'Physiologie', count: 31},
    {code: 'S02a', name: 'Chemie für Mediziner', count: 28},
    {code: 'F11', name: 'Innere Medizin', count: 21},
    {code: 'S03a', name: 'Biologie für Mediziner', count: 13},
    {code: 'S01a', name: 'Physik für Mediziner', count: 12},
    {code: 'Q02', name: 'Geschichte, Theorie, Ethik der Medizin', count: 9},
    {code: 'S03b', name: 'Anatomie', count: 9},
    {code: 'F10', name: 'Hygiene, Mikrobiologie, Virologie', count: 9},
    {code: 'F09', name: 'Humangenetik', count: 8},
    {code: 'F12', name: 'Kinderheilkunde', count: 7},
    {code: 'Q08', name: 'Notfallmedizin', count: 6},
    {code: 'F17', name: 'Pharmakologie, Toxikologie', count: 6},
    ], 
    2: [ {code: 'FÜ', name: 'fächerübergreifend', count: 47},
    {code: 'S02b', name: 'Biochemie/ Molekularbiologie', count: 30},
    {code: 'S01b', name: 'Physiologie', count: 24},
    {code: 'S03b', name: 'Anatomie', count: 24},
    {code: 'S04b', name: 'Grundlagen der Medizinischen Soziologie', count: 19},
    {code: 'F11', name: 'Innere Medizin', count: 15},
    {code: 'Q01', name: 'Epidemiologie, medizinische Biometrie und medizinische Informatik', count: 15},
    {code: 'Q04', name: 'Infektiologie, Immunologie', count: 13},
    {code: 'S04a', name: 'Grundlagen der Medizinischen Psychologie', count: 10},
    {code: 'Q03', name: 'Gesundheitsökonomie, Gesundheitssystem, Öffentliche Gesundheitspflege', count: 8},
    {code: 'F03', name: 'Arbeitsmedizin, Sozialmedizin', count: 7},
    {code: 'F16', name: 'Pathologie', count: 6},
    {code: 'F13', name: 'Klinische Chemie, Laboratoriumsdiagnostik', count: 6},
    {code: 'S01a', name: 'Physik für Mediziner', count: 6},
    {code: 'F17', name: 'Pharmakologie, Toxikologie', count: 6},
    ], 
    3: [ {code: 'S03b', name: 'Anatomie', count: 47},
    {code: 'FÜ', name: 'fächerübergreifend', count: 37},
    {code: 'S01b', name: 'Physiologie', count: 35},
    {code: 'F11', name: 'Innere Medizin', count: 29},
    {code: 'F06', name: 'Dermatologie, Venerologie', count: 24},
    {code: 'S02b', name: 'Biochemie/ Molekularbiologie', count: 19},
    {code: 'F15', name: 'Orthopädie', count: 11},
    {code: 'F10', name: 'Hygiene, Mikrobiologie, Virologie', count: 9},
    {code: 'Q12', name: 'Rehabilitation, Physikalische Medizin, Naturheilverfahren', count: 8},
    {code: 'F17', name: 'Pharmakologie, Toxikologie', count: 8},
    ], 
    4: [ {code: 'S01b', name: 'Physiologie', count: 45},
    {code: 'S03b', name: 'Anatomie', count: 39},
    {code: 'F11', name: 'Innere Medizin', count: 32},
    {code: 'FÜ', name: 'fächerübergreifend', count: 28},
    {code: 'F14', name: 'Neurologie', count: 19},
    {code: 'F08', name: 'Hals-Nasen-Ohrenheilkunde', count: 15},
    {code: 'S02b', name: 'Biochemie/ Molekularbiologie', count: 14},
    {code: 'F04', name: 'Augenheilkunde', count: 7},
    {code: 'F16', name: 'Pathologie', count: 6},
    {code: 'S01a', name: 'Physik für Mediziner', count: 6},
    ], 
    5: [ {code: 'F11', name: 'Innere Medizin', count: 38},
    {code: 'FÜ', name: 'fächerübergreifend', count: 31},
    {code: 'F10', name: 'Hygiene, Mikrobiologie, Virologie', count: 23},
    {code: 'S02b', name: 'Biochemie/ Molekularbiologie', count: 12},
    {code: 'F19', name: 'Psychosomatische Medizin und Psychotherapie', count: 12},
    {code: 'F13', name: 'Klinische Chemie, Laboratoriumsdiagnostik', count: 10},
    {code: 'F16', name: 'Pathologie', count: 9},
    {code: 'Q04', name: 'Infektiologie, Immunologie', count: 9},
    {code: 'F17', name: 'Pharmakologie, Toxikologie', count: 8},
    {code: 'F18', name: 'Psychiatrie und Psychotherapie', count: 7},
    {code: 'F09', name: 'Humangenetik', count: 7},
    {code: 'Q13', name: 'Palliativmedizin', count: 6},
    {code: 'Q11', name: 'Bildgebende Verfahren, Strahlenbehandlung, Strahlenschutz', count: 6},
    {code: 'F12', name: 'Kinderheilkunde', count: 6},
    {code: 'S03b', name: 'Anatomie', count: 6},
    {code: 'F02', name: 'Anästhesiologie', count: 6},
    ], 
    6: [ {code: 'FÜ', name: 'fächerübergreifend', count: 39},
    {code: 'F11', name: 'Innere Medizin', count: 20},
    {code: 'Q08', name: 'Notfallmedizin', count: 12},
    {code: 'S01b', name: 'Physiologie', count: 10},
    {code: 'F01', name: 'Allgemeinmedizin', count: 9},
    {code: 'S03b', name: 'Anatomie', count: 8},
    {code: 'F12', name: 'Kinderheilkunde', count: 7},
    {code: 'F07', name: 'Frauenheilkunde, Geburtshilfe', count: 7},
    {code: 'S02b', name: 'Biochemie/ Molekularbiologie', count: 7},
    {code: 'Q03', name: 'Gesundheitsökonomie, Gesundheitssystem, Öffentliche Gesundheitspflege', count: 6},
    {code: 'Q04', name: 'Infektiologie, Immunologie', count: 6},
    ], 
    7: [ {code: 'F11', name: 'Innere Medizin', count: 75},
    {code: 'F05', name: 'Chirurgie', count: 58},
    {code: 'F15', name: 'Orthopädie', count: 30},
    {code: 'Q11', name: 'Bildgebende Verfahren, Strahlenbehandlung, Strahlenschutz', count: 26},
    {code: 'F12', name: 'Kinderheilkunde', count: 21},
    {code: 'S03b', name: 'Anatomie', count: 15},
    {code: 'FÜ', name: 'fächerübergreifend', count: 15},
    {code: 'Q05', name: 'Klinisch-pathologische Konferenz', count: 13},
    {code: 'F16', name: 'Pathologie', count: 13},
    {code: 'Q09', name: 'Klinische Pharmakologie/ Pharmakotherapie', count: 10},
    {code: 'Q08', name: 'Notfallmedizin', count: 9},
    {code: 'F21', name: 'Urologie', count: 8},
    {code: 'F06', name: 'Dermatologie, Venerologie', count: 6},
    {code: 'F02', name: 'Anästhesiologie', count: 6},
    {code: 'Q12', name: 'Rehabilitation, Physikalische Medizin, Naturheilverfahren', count: 6},
    ], 
    8: [ {code: 'F14', name: 'Neurologie', count: 56},
    {code: 'F18', name: 'Psychiatrie und Psychotherapie', count: 38},
    {code: 'F08', name: 'Hals-Nasen-Ohrenheilkunde', count: 36},
    {code: 'F19', name: 'Psychosomatische Medizin und Psychotherapie', count: 21},
    {code: 'Q11', name: 'Bildgebende Verfahren, Strahlenbehandlung, Strahlenschutz', count: 18},
    {code: 'F11', name: 'Innere Medizin', count: 17},
    {code: 'FÜ', name: 'fächerübergreifend', count: 15},
    {code: 'F05N', name: 'Chirurgie - Neurochirurgie', count: 12},
    {code: 'F04', name: 'Augenheilkunde', count: 11},
    {code: 'F12', name: 'Kinderheilkunde', count: 10},
    {code: 'F16', name: 'Pathologie', count: 9},
    {code: 'F02', name: 'Anästhesiologie', count: 9},
    {code: 'F05', name: 'Chirurgie', count: 9},
    {code: 'F05M', name: 'Chirurgie - Mund-, Kiefer- und Gesichtschirurgie', count: 8},
    {code: 'S03b', name: 'Anatomie', count: 8},
    {code: 'Q05', name: 'Klinisch-pathologische Konferenz', count: 8},
    {code: 'Q09', name: 'Klinische Pharmakologie/ Pharmakotherapie', count: 8},
    {code: 'F06', name: 'Dermatologie, Venerologie', count: 7},
    ], 
    9: [ {code: 'F12', name: 'Kinderheilkunde', count: 58},
    {code: 'F07', name: 'Frauenheilkunde, Geburtshilfe', count: 42},
    {code: 'FÜ', name: 'fächerübergreifend', count: 27},
    {code: 'F02', name: 'Anästhesiologie', count: 15},
    {code: 'F21', name: 'Urologie', count: 15},
    {code: 'F11', name: 'Innere Medizin', count: 12},
    {code: 'F20', name: 'Rechtsmedizin', count: 12},
    {code: 'F06', name: 'Dermatologie, Venerologie', count: 11},
    {code: 'F16', name: 'Pathologie', count: 9},
    {code: 'Q07', name: 'Medizin des Alterns und des alten Menschen', count: 9},
    {code: 'Q01', name: 'Epidemiologie, medizinische Biometrie und medizinische Informatik', count: 7},
    {code: 'Q13', name: 'Palliativmedizin', count: 7},
    {code: 'Q09', name: 'Klinische Pharmakologie/ Pharmakotherapie', count: 6},
    ], 
    10: [ {code: 'Q08', name: 'Notfallmedizin', count: 21},
    {code: 'F11', name: 'Innere Medizin', count: 9},
    {code: 'F02', name: 'Anästhesiologie', count: 8},
    {code: 'F01', name: 'Allgemeinmedizin', count: 8},
    {code: 'Q09', name: 'Klinische Pharmakologie/ Pharmakotherapie', count: 7},
    {code: 'F17', name: 'Pharmakologie, Toxikologie', count: 6},
    ],
}*/

const semesters = ['1. Fachsemester', '2. Fachsemester', '3. Fachsemester', '4. Fachsemester', '5. Fachsemester']

const result = _.flow([
    seedrnd => randomUniform.source(seedrnd)(50, 75), 
    rng => _.range(4).map(rng)
])

const createDist = _.flow([
    seedrnd => randomNormal.source(seedrnd)(50, 30),
    rng => _.range(100)
        .map(() => _.range(4).map(() => Math.min(Math.floor(rng()), 80)))
])
    
const distMean = d => _.round(_.meanBy(d, d => _.mean(d)))

const concatResult = ([result, data]) => [ result, data.concat([ result ]).sort((a,b) => _.mean(a)-_.mean(b)) ]

const createResult = _.flow([ seedrandom, _.over(result, createDist), concatResult ])

const createTotalsData = ([result, dist]) => {
    const scale = scaleLinear().domain([0,dist.length - 1]).range([100, 0])
    return {
        dist: dist.map( (d, i) => ({ x: scale(i), y: _.mean(d) })),
        result,
        resultMean: _.round(_.mean(result)),
        resultPercent: scale(dist.indexOf(result)),
        distMean: distMean(dist),
        id: _.uniqueId(),
    }
}

const sampleSize = (a, n, rnd) => {
    const res = []
    while(n--) res.push(_.pullAt(a, _.round(rnd(0,a.length - 1)()))[0])
    return res
}

const createSubjects = semester => {
    const random = randomUniform.source(seedrandom(semester + 'wkodk'))
    const questions = sampleSize(_.range(1,80), Math.min(subjects[semester].length - 1, 7), random)
        .concat([0,80])
        .sort((a,b) => a-b)
        .map((d, i, a) => d - a[i-1])
    return _.take(subjects[semester], 8).map((s, i) => ({...s, richtig: _.round(random(0,questions[i+1])()), gesamt: questions[i+1]}))
}

const createDetailsData = (semester, [result, dist]) => ({
    modules: _.zip(...dist).map( (d, i) => ({
        mean:  _.mean(d),
        result: _.round(result[i]),
        label: `Modul ${semester * 4 - 3 + i}`
    })),
    fächer: createSubjects(semester),
    date: new Date(2013 + parseInt(semester), 6, 15),
})

const Results = fp.keyBy(r => r.id, fp.map(semester => _.flow([createResult, _.over([ _.partial(createDetailsData, semester.split(".")[0]), createTotalsData, () => ({ semester })]), fp.mergeAll])(semester) )(semesters))

export default Results