import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BetterThanYTPlayer from './VideoPlayer/VideoPlayer';

function App() {

  useEffect(() => {
    getVideos();
  })

  async function getVideos(){
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCFkYBQpklfldTUUxy9csFQfWr4Z2ZQcdU&maxResults=5&type=video&q=mkbhd`); //Interpolate a SearchBar Input Function
    console.log(response.data.items[0].id.videoId);

    const mainVideo = response.data.items[0].id.videoId;
  }

  return (
    <div>
      <h1>Hi BetterThanYoutube!</h1>
      <BetterThanYTPlayer />
    </div>
  );
}


export default App;
