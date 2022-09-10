import React, { Component } from 'react'
import {movies} from '../movieData'
export class Banner extends Component {
  render() {
    
    //let backDrop = '/nDLylQOoIazGyYuWhk21Yww5FCb.jpg'
      let moviesElem = movies.results[Math.floor((Math.random()*10)+1)]
      let backDrop=moviesElem.backdrop_path
      return (
        <div className="card banner-card" style={{}}>
        <img src={`https://image.tmdb.org/t/p/original${backDrop}`} class="card-img-top banner-img" alt="..."/>
        
          <h5 className="card-title banner-title">Card title</h5>
          <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
       
      </div>
    )
  }
}

export default Banner