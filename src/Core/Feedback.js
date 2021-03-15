import React, { useRef, useState, useEffect } from 'react'
import {compose} from '../Utils/utils'
import socketio from "socket.io-client"
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPaperPlane, faCheckSquare, faSquare,faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { selectors as user } from '../User/Store'
import { SlideDown } from 'react-slidedown'

const url = 'https://levelup.charite.de'

const socket = socketio(url, { path: '/feedback-ws/socket.io', transports: ['websocket'] })
const style = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    fontSize: '.8rem',
    zIndex: 999999
}

const stateToProps = state => ({
    loggedIn: user.isLoggedIn(state),
    user: user.getData(state),
})
const waitForLogin = Comp => props => props.loggedIn ? <Comp {...props} /> : null
const Feedback = compose([connect(stateToProps), waitForLogin])(({ user }) => {
    const input = useRef(null)
    const messageDiv = useRef(null)
    const [ sendId, setSendId ] = useState(true)
    const [ ts, setTs ] = useState(window.localStorage.getItem('ts'))
    const [ show, setShow ] = useState(true)
    const [ messages, setMessages ] = useState([{
        text: 'Willkommen auf LevelUp! Wir brauchen dringend dein Feedback um LevelUp zu verbessern und weiterzuentwickeln. Schreib uns einfach alles, was dir einfällt.',
        sender: 'server'
    }])

    function pushMessage(message) {
        setMessages(messages.concat(message))
    }

    useEffect(() => {
        const messageHandler = data => pushMessage( { text: data, sender: 'server' } )
        socket.on('message', messageHandler)
        const tsHandler = data => {
            window.localStorage.setItem('ts', data)
            setTs( data )
        }
        socket.on('ts', tsHandler)
        socket.emit('join', ts)
        return () => {
            socket.off('message', messageHandler)
            socket.off('ts', tsHandler)
        }
    })

    useEffect(() => {
        if(!messageDiv.current) return
        messageDiv.current.scrollTop = messageDiv.current.scrollHeight
    }, [messages])
    useEffect(() => { setTimeout(() => setShow(false), 5000) }, [])

    function postFeedback() {
        const message = input.current.value
        if(message.trim() === '') return
        socket.emit('message', { message , ts, email: sendId && user.email })
        pushMessage({ text: message, sender: 'me' })
        input.current.value = ''
    }

    function handleKeyPress(e) {
        if(e.keyCode === 13) postFeedback()
    }


    return <div style={style} className="mr-3 mb-3 feedback">
        { show ? <SlideDown> <div className="with-shadow" style={{width: '18rem', backgroundColor: 'white', border: 'none'}}>
            <div className="text-right px-2 color-bg-navigation" style={{height: '2rem', lineHeight: '2.1rem'}} onClick={() => setShow(false)} >
                <FontAwesomeIcon style={{fontSize: '1rem'}} className="text-white" icon={faTimesCircle} />
            </div>
            <div ref={messageDiv} className="p-2 overflow-auto" style={{maxHeight: '17rem'}}>
                {messages.map((msg, i) => <div className={`mt-1 text-white ${msg.sender === 'server' && 'text-right'}`} key={i}>
                    <span style={{borderRadius: '.3rem'}} className={`text-left d-inline-block p-2 ${msg.sender === 'server' ? 'bg-info ml-3' : 'bg-secondary mr-3'}`}>
                        {msg.text}
                    </span>
                </div>)}
            </div>
            <div className="text-right p-2 pb-0 d-flex">
                <input style={{border: 'none', borderBottom: '1px solid lightgrey'}} className="flex-grow-1 no-outline" placeholder="Dein Feedback..." ref={input} onKeyUp={e => handleKeyPress(e)} />
                <FontAwesomeIcon className="text-primary m-2" style={{fontSize: '1rem'}} icon={faPaperPlane} onClick={ () => postFeedback() } />
            </div>
            <div className="text-right p-2 pb-3 d-flex" style={{cursor: 'pointer', lineHeight: '1.2em', color: 'grey', fontSize: '.7rem'}} onClick={ () => setSendId(!sendId) }>
                <FontAwesomeIcon className="mr-1" style={{fontSize: '1.2em'}} icon={sendId ? faCheckSquare : faSquare} />
                meine Mailadresse mitsenden
            </div>
        </div> </SlideDown>:
        <SlideDown>
            <div className="w-100 text-right with-shadow " >
            <button id='tunnel' className="btn color-button-color" onClick={ () => setShow(true) }>
            <div className='h-100 w-100' id='FeedbackButton' style={{position:'absolute', zIndex:'9'}}></div>
                <FontAwesomeIcon style={{fontSize: '1.3rem'}} icon={faCommentDots} />
            </button>
        </div></SlideDown>}
    </div>
})

export default Feedback
