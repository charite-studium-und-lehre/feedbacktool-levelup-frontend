import { epas, ExternAssessing as initialAssessments } from '../EPAs/static/Data'
import PtmData from '../Exams/Ptm/Data'
import MCData from '../Exams/MC/Data'
import StationsData from '../Exams/Stations/Data'
import ProgressData from '../Progress/Data'

const backendUrl = 'https://levelup.charite.de/backend/api'
const mockData = [
    {
        url: 'epas',
        data: { meineEPAs: epas, fremdeinschaetzungen: initialAssessments }
    },
    // {
    //     url: 'pruefungen',
    //     data: { pruefungen: [...PtmData, ...MCData, ...StationsData ]}
    // },
    {
        url: 'studienfortschritt',
        data: ProgressData
    },
]

export const get = url => {
    const mock = mockData.find( d => url.startsWith(d.url) )
    return mock ? 
        new Promise( r => r(new Response( JSON.stringify(mock.data) ))) :
        fetch(`${backendUrl}/${url}`, {
            credentials: 'include',
        })
}

export const post = (url, data) =>
    fetch(`${backendUrl}/${url}`, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(data)
    })