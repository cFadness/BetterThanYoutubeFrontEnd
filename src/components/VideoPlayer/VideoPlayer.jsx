import './VideoPlayer.css';
import React, {useState, useEffect} from 'react';

function BetterThanYTPlayer() {
    return (
        <iframe title="Embedded Youtube Video Player" id="ytplayer" type="text/html" width="740" height="370"
        src="https://www.youtube.com/embed/CaaJyRvvaq8" frameborder="0"></iframe>
    )
}

export default BetterThanYTPlayer;