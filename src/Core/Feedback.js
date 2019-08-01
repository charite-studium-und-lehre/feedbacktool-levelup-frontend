import React, { useRef, useState, useEffect } from 'react'
import socketio from "socket.io-client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const url = 'https://lu-feedback.herokuapp.com/'

const socket = socketio(url)

const style = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '.8rem',
    zIndex: 999999,
}
const Feedback = () => {
    const input = useRef(null)
    const messageDiv = useRef(null)
    const [ ts, setTs ] = useState(null)
    const [ show, setShow ] = useState(true)
    const [ messages, setMessages ] = useState([{
        text: 'Das hier ist LevelUp! Wir wollen dir auf dieser Plattform in Zukunft Rückmeldung zu deinem Fortschritt im Studium geben. Daher würden wir gerne deine Meinung dazu hören, was wir noch verbessern können. Schreib uns hier im Textfeld einfach alles, was dir einfällt. Bitte beachte, dass LevelUp noch nicht fertig ist und es noch ein paar Fehler geben kann. Außerdem werden hier nur Beispieldaten angezeigt, die nichts mit deinen echten Ergebnissen zu tun haben.',
        sender: 'server'
    }])

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
        if(message.trim() === '') return
        socket.emit('message', { message , ts })
        pushMessage({ text: message, sender: 'me' })
        input.current.value = ''
    }

    function handleKeyPress(e) {
        if(e.keyCode === 13) postFeedback()
    }

    return <div style={style} className="p-4">
        { show && <div className="with-shadow" style={{width: '18rem', backgroundColor: 'white', border: 'none'}}>
            <div className="text-right px-2 bg-primary" style={{height: '2rem', lineHeight: '2.1rem'}} onClick={() => setShow(false)} >
                <FontAwesomeIcon style={{fontSize: '1rem'}} className="text-white" icon={faTimesCircle} />
            </div>
            <div ref={messageDiv} className="p-2" style={{maxHeight: '17rem', overflow: 'scroll'}}>
                {messages.map((msg, i) => <div className={`mt-1 text-white ${msg.sender === 'server' && 'text-right'}`} key={i}>
                    <span style={{borderRadius: '.3rem'}} className={`d-inline-block p-2 ${msg.sender === 'server' ? 'bg-info ml-3' : 'bg-secondary mr-3'}`}>{msg.text}</span>
                </div>)}
            </div>
            <div className="text-right p-2 d-flex">
                <input style={{border: 'none', borderBottom: '1px solid lightgrey'}} className="flex-grow-1 no-outline" placeholder="Dein Feedback..." ref={input} onKeyUp={e => handleKeyPress(e)}></input>
                <FontAwesomeIcon className="text-primary m-2" style={{fontSize: '1rem'}} icon={faPaperPlane} onClick={ () => postFeedback() } />
            </div>
        </div>}
        {!show && <div className="w-100 text-right with-shadow">
            <button className="btn btn-success" onClick={ () => setShow(true) }>feedback</button>
        </div>}
    </div>
}

export default Feedback