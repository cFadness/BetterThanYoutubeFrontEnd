import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BetterThanYTPlayer from './VideoPlayer/VideoPlayer';

function App() {

  useEffect(() => {
    getVideos();
  })

  async function getVideos(){
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCFkYBQpklfldTUUxy9csFQfWr4Z2ZQcdU');
    console.log(response.data);
  }

  return (
    <div>
      <h1>Hi BetterThanYoutube!</h1>
      <BetterThanYTPlayer />
    </div>
  );
}


export default App;
