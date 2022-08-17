import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieInformation.css'


function MovieInformation(){
    const[movie,setMovie] = useState([])
    const {id} = useParams();
    const getMovieRequest = async (id) => {
		const url = `http://www.omdbapi.com/?i=${id}&apikey=b67c876b`;

		const response = await fetch(url);
		const responseJson = await response.json();
        setMovie(responseJson)
	};
    console.log(movie)

    useEffect(() => {
		getMovieRequest(id);
	}, [id]);

    return(
        <div className="movie-info">
            <div className='movie-info-img-div'>
                <img className='movie-info-img' src={movie.Poster} alt=""/>
            </div>
            <div className='movie-info-text'>
                <h1 className='movie-info-item'>Title:{movie.Title}</h1>
                <p className='movie-info-item'>Plot:{movie.Plot}</p>
                <p className='movie-info-item'>Type:{movie.Type}</p>
                <p className='movie-info-item'>Year:{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieInformation;