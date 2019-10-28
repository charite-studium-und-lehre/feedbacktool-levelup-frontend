import { epas, ExternAssessing as initialAssessments } from '../EPAs/static/Data'
import PtmData from '../Exams/Ptm/Data'
import MCData from '../Exams/MC/Data'
import StationsData from '../Exams/Stations/Data'
import ProgressData from '../Progress/Data'
import DummyQuestions from '../Exams/MC/Questions/DummyQuestions'

const backendUrl = 'https://levelup.charite.de/backend/api'
const mockData = [
    {
        url: 'epas',
        data: () => ({ meineEPAs: epas, fremdeinschaetzungen: initialAssessments })
    },
    {
        url: 'pruefungen',
        data: () => ({ pruefungen: [...PtmData, ...MCData, ...StationsData ]})
    },
    {
        url: 'studienfortschritt',
        data: () => ProgressData
    },
    {
        url: 'fragen',
        data: url => ({ id: url.match(/(\d+)/)[0], fragen: DummyQuestions(80, 1) }),
    },
]

export const get = url => {
    const mock = mockData.find( d => url.endsWith(d.url) )
    return mock ? 
        new Promise( r => r(new Response( JSON.stringify(mock.data(url)) ))) :
        fetch(`${backendUrl}/${url}`, {
            credentials: 'include',
        })
}

export const post = (url, data) =>
    fetch(`${backendUrl}/${url}`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })