import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
/*
const movies=[
  {

    title: "Matrix",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" 
  },
  {
    title: "Full Metal Jacket",
    poster: "https://alternativemovieposters.com/wp-content/uploads/2018/01/alberto_fullmetal.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
  }
]

const movieTitle=[
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages=[
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "https://alternativemovieposters.com/wp-content/uploads/2018/01/alberto_fullmetal.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"  
]
*/
class App extends Component {

  state={
    /*
    greeting: 'Hello!',
    movies: [
      {
        title: "Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" 
      },
      {
        title: "Full Metal Jacket",
        poster: "https://alternativemovieposters.com/wp-content/uploads/2018/01/alberto_fullmetal.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
      }
    ]
    */
  }

  //Render: componentWillMount() -> render() -> componentDidMount()
  //Update: componentWillReceiveProps() -> shouldComponentUpdate()==true -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount(){
    //console.log('will mount')
  }

  componentDidMount(){
    //console.log('did mount')
    /*
    setTimeout(() => {
      
      //this.state.greeting='somthing'
      //Do not mutate state directly. Use setState()  react/no-direct-mutation-state
      
      this.setState({
        //greeting: 'Hello again!',
        
        movies: [ //replace
          //...this.state.movies,//existing
          {
            title: "transpotting",
            poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          }//add
        ]
      })
    }, 5000)
    */
    this._getMovies();
  }

  _getMovies = async () => {//no sequence
    const movies = await this._callApi();//wail till the function is completed(not mean success)
    this.setState({
      movies
    });
  };

  _callApi = () => {
    //AJAX: Asynchronous Javascript And XML(/JSON)
    //JSON: JavaScript Object Notation
    //promise: scenario
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json()) //return is included in 'arrow function'(but 'this.state' isn't)
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  };

  _renderMovies = () => {
    /*
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    */
    const movies = this.state.movies.map(movie => {
      //console.log(movie)
      return (
        <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis} 
        key={movie.id} 
      />
      );
    });
    return movies
  }

  render() {
    //console.log('did render')
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>

        {movies ? this._renderMovies() : 'Loading'}

        {/*this.state.greeting*/}

        {/*this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })*/}
        {/*
        <Movie title={movieTitle[0]} poster={movieImages[0]} />
        <Movie title={movieTitle[1]} poster={movieImages[1]} />
        <Movie title={movieTitle[2]} poster={movieImages[2]} />
        <Movie title={movieTitle[3]} poster={movieImages[3]} />
        */}
      </div>
    );
  }
}

export default App;