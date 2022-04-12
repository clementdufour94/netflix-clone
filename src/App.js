import React from 'react';
import './Css/App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>

      <Banner />
      
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movie" fetchUrl={requests.fetchHorroMovies} />
     <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;
