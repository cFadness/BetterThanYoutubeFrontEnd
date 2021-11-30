import './VideoPlayer.css';
import React, {useState, useEffect} from 'react';

function BetterThanYTPlayer() {
    return (
        <iframe title="Embedded Youtube Video Player" id="ytplayer" type="text/html" width="740" height="370"
        src="https://www.youtube.com/embed/" frameborder="0"></iframe> // mainVideo needs to be implemented after embed within source url
    )
}

export default BetterThanYTPlayer;