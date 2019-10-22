import {
    ControlBar,
    CurrentTimeDisplay,
    Player,
    TimeDivider,
    VolumeMenuButton,
    BigPlayButton
} from "video-react";
import React from "react"
import poster from '../images/video-poster.png'

export default () =>
    <div className="d-lg-none d-lg-block py-4">
        <h5>Video: Was sind EPAs?</h5>
        <Player className="border" poster={poster} src="https://levelup.charite.de/videos/epa_2019.mp4">
            <BigPlayButton position="center"/>
            <ControlBar>
                <CurrentTimeDisplay order={4.1}/>
                <TimeDivider order={4.2}/>
                <VolumeMenuButton disabled/>
            </ControlBar>
        </Player>
    </div>