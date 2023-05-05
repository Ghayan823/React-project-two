import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Card from './Card'
function App() {
  const [movies, setMovies]= useState([])
 const[userinput, setuserinput]= useState("")
  function fetchmovies (name){
    fetch("http://www.omdbapi.com/?apikey=5efd9b0d&s="+name)
    .then(response => response.json())
    .then((data)=> setMovies(data.Search))

  }
  useEffect(()=>{
    fetchmovies("harry")
  }, [])
  console.log(movies)
  return (
<div>
<div className="mb-3" style={{width: "400 px"}}>
  
  <input style={{width: "40%", margin: "auto", marginTop: 20}}
    type="email"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder='Search movie'
    onChange={(event)=>setuserinput(event.currentTarget.value)}
  />
<button className="my-2" style={{marginLeft: "44%", marginTop: 30, backgroundColor: "white", color: "black" }}onClick={()=>fetchmovies(userinput) } className='btn btn-primary'> search movie </button>
</div>

<div className="row" > 
   {movies.map((movie)=><Card title={movie.Title} year={movie.Year} image={movie.Poster}/>)}
   </div>
  </div>
  );

}

export default App;
