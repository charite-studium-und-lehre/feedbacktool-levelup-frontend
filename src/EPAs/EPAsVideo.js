import {
    ControlBar,
    CurrentTimeDisplay,
    ForwardControl, Player,
    ReplayControl,
    TimeDivider,
    VolumeMenuButton
} from "video-react";
import React from "react";

export default () =>
    <div className="d-lg-none d-lg-block py-4">
        <h5>Video: Was sind EPAs?</h5>
        <Player className="border" src="https://levelup.charite.de/videos/epa_2019.mp4">
            <ControlBar>
                <ReplayControl seconds={10} order={1.1}/>
                <ForwardControl seconds={30} order={1.2}/>
                <CurrentTimeDisplay order={4.1}/>
                <TimeDivider order={4.2}/>
                <VolumeMenuButton disabled/>
            </ControlBar>
        </Player>
    </div>