import React from 'react'
import '../styles/App.css';
const App = () => {
  const handleChange=(event)=>{
    //console.log(event.target.value)
    var color = ""
    if(event.target.value=="Sad"){
      color='rgb(19, 0, 164)'
    }else if(event.target.value=="Sleepy"){
      color='rgb(35, 177, 0)'
    }else if(event.target.value=="Excited"){
      color='rgb(255, 0, 66)'
    }else{
      color='rgb(238, 241, 0)'
    }
    document.getElementById("mood-indicator").style.backgroundColor=color;
  }
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={{backgroundColor:'rgb(238, 241, 0)'}}></div>
    </div>
  )
}


export default App;
