const host = process.env.NODE_ENV === 'developments' ? 'https://levelup.charite.de' : ''
const platform = process.env.PUBLIC_URL === '/app' ? 'backend' : 'backend-develop'
const backendUrl = `${host}/${platform}/api`

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