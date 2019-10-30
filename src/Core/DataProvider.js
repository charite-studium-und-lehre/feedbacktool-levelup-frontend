import DummyQuestions from '../Exams/MC/Questions/Data'

const backendUrl = window.location.origin.includes('localhost') ? 
    '/MockingData' :
    'https://levelup.charite.de/backend/api'

const mockData = [
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

export const post = (url, data) => {
    const mock = mockData.find( d => url.endsWith(d.url) )
    return mock ? 
        new Promise( r => r(new Response( JSON.stringify(mock.postData(url)) ))) :
        fetch(`${backendUrl}/${url}`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
}