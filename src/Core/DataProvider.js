const host = 'localhost:3000'
const platform = process.env.PUBLIC_URL === '/app' || process.env.PUBLIC_URL === '/app-demo'
    ? ''
    : ''
const backendUrl = `${host}/`

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