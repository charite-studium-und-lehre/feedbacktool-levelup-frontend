const backendUrl = window.location.origin.includes('localhost') ?
    'https://levelup.charite.de/backend/api' :
    'https://levelup.charite.de/backend/api'


export const get = url =>
    fetch(`${backendUrl}/${url}`, {
        credentials: 'include',
    })

export const post = (url, data) =>
    fetch(`${backendUrl}/${url}`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })