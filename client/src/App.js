import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
const [movieName, setMovieName] = useState('');
const [review, setReview] = useState('');

const submitReview = ()=>{
  Axios.post("http://localhost:3010/api/insert",{
    movieName:movieName, 
    movieReview: review
  }).then(()=>{
    alert("successful insert");
  });
};

  return (
    <div className="App">
     Node REACT MySQL App
     <div className ="form">
       <label>Movie Name</label>
       <input type="text" name ="movieName" onChange={(e)=>{
          setMovieName(e.target.value)
       }} />
         <label>Review</label>
       <input type="text" name ="review" onChange={(e)=>{
         setReview(e.target.value)
       }}/>
       <button>Submit</button>

     </div>
    </div>
  );
}

export default App;
