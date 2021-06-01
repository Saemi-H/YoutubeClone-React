import React, { useEffect,useState } from 'react';
import './App.css';
import Nav from './component/header/Nav';
import VideoList from './component/videoList/videoList';
import Router from './useRouter/route'

function App({youtube}) {
  const [query, setQuery] = useState('')
  const [videolist, setVideoList] = useState([])
  useEffect(()=>{
   getVideo() 
  }, [query])

  const getVideo=()=>{
    youtube.getPopularVideo().then(console.log)
    youtube.getPopularVideo().then(result=>setVideoList(result.items))
      }
  
  const handleChange =e=>{
        console.log(e.target.value)
        setQuery(e.target.value)
        youtube.getSearch(query).then(result=>setVideoList(result.items))
    }
  const handleSearch=()=>{
    console.log('handlesearch')
    youtube.getPopularVideo().then(console.log)
    
  }

  return (
    
    <div className="App">
      <Nav handleChange={handleChange} handleSearch={handleSearch}/>
      <Router/>
      <VideoList videolist={videolist} /> 
    </div>
    
    
  );
}

export default App;
