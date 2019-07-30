import React, { useRef, useState, useEffect } from 'react'
import socketio from "socket.io-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

const url = 'https://lu-feedback.herokuapp.com/'

const socket = socketio(url)

const style = {
    position: 'absolute',
    bottom: 0,
    right: 0,
}
const Feedback = () => {
    const input = useRef(null)
    const messageDiv = useRef(null)
    const [ ts, setTs ] = useState(null)
    const [ show, setShow ] = useState(false)
    const [ messages, setMessages ] = useState([])

    function pushMessage(message) {
        setMessages(messages.concat(message))
    }

    useEffect(() => {
        const messageHandler = data => pushMessage( { text: data, sender: 'server' } )
        socket.on('message', messageHandler)
        const tsHandler = data => setTs( data )
        socket.on('ts', tsHandler)
        const connectHandler = () => { if(ts) socket.emit('join', ts) }
        socket.on('connected', connectHandler)
        return () => { 
            socket.off('connected', connectHandler)
            socket.off('message', messageHandler)
            socket.off('ts', tsHandler) 
        }
    })

    useEffect(() => {
        if(!messageDiv.current) return
        messageDiv.current.scrollTop = messageDiv.current.scrollHeight
    }, [messages])

    function postFeedback() {
        const message = input.current.value
        socket.emit('message', { message , ts })
        pushMessage({ text: message, sender: 'me' })
        input.current.value = ''
    }

    return <div style={style} className="p-4">
        { show && <div style={{width: '18rem', backgroundColor: 'lightyellow', border: '1px solid grey'}}>
            <div className="text-right px-2" onClick={() => setShow(false)} style={{backgroundColor: 'lightgrey'}}>
                <FontAwesomeIcon className="text-white" icon={faTimesCircle} />
            </div>
            <div ref={messageDiv} className="p-2" style={{maxHeight: '17rem', overflow: 'scroll'}}>
                {messages.map((msg, i) => <p style={{borderRadius: '.3rem'}} className={`p-1 text-white ${msg.sender === 'server' ? 'bg-success' : 'bg-info'}`} key={i}>{msg.text}</p>)}
            </div>
            <div className="text-right p-2">
                <input className="w-100" placeholder="Dein Feedback..." ref={input}></input
                ><button className="btn btn-primary mt-1"  onClick={ () => postFeedback() }>senden</button>
            </div>
        </div>}
        {!show && <div className="w-100 text-right">
            <button className="btn btn-success" onClick={ () => setShow(true) }>feedback</button>
        </div>}
    </div>
}

export default Feedback