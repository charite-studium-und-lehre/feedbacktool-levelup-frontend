import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { SlideDown } from 'react-slidedown'
import 'video-react/dist/video-react.css';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react'

const video = ()=>
        <Player poster="../images/poster.png">
            <source src="https://levelup.charite.de/videos/epa_2019.mp4" />
            <ControlBar>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                <VolumeMenuButton disabled />
            </ControlBar>
        </Player>


const Legend = props => 
    <div>
        <div className="d-flex">
            <div>{props.title && <h4>{props.title}</h4>}</div>
            <div className="ml-auto">
                <FontAwesomeIcon 
                    onClick={() => props.toggleExtended()}
                    className={props.extended ? 'text-primary' : 'text-muted'}
                    style={{fontSize: '1.3rem'}}
                    icon={faInfoCircle} />
            </div>
        </div>
        <div>
            {video()}
        </div>
        <div className="animated fast row" style={{ overflow: 'hidden' }}>
            <SlideDown className="animated fast">
            {props.extended &&
                <div className="col my-2" style={{fontSize: '.9rem'}}>
                    {props.children}
                </div>
            }
            </SlideDown>
        </div>
    </div>

export default makeExtendable(Legend, true)