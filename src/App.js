import React, { useEffect,useState } from 'react';
import './App.css';
import Nav from './component/header/Nav';
import VideoList from './component/videoList/videoList';

function App({youtube}) {
  const [query, setQuery] = useState('')
  const [videolist, setVideoList] = useState([])
  useEffect(()=>{
   getVideo() 
  }, [query])

  const getVideo=()=>{
    youtube.requestOptions.then(console.log)
      }
  
  const handleChange =e=>{
        console.log(e.target.value)
        setQuery(e.target.value)
    }
  const handleSearch=()=>{
    
  }
  return (
    <div className="App">
      <Nav handleChange={handleChange} handleSearch={handleSearch}/>
      <VideoList videolist={videolist}/>
    </div>
  );
}

export default App;
