import React from 'react';
import './MovieList.css'
import { Link } from "react-router-dom";

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='movie-item'>
					<Link to={`movies/${movie.imdbID}`}><img className='movie-img' src={movie.Poster} alt='movie'></img></Link>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className=''
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;