import React from "react";
import {useSelector} from "react-redux";
import {getMovies} from "../../features/movies/movieSelector";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
    const movies = useSelector(getMovies);

    let renderMovieCard =
        movies.Response === "True" ? (
            movies?.Search.map((movie, index) => {
                return <MovieCard key={index} data={movie} />;
            })
        ) : (
            <div>Error</div>
        );

    return (
        <div className="movies__container">
            <div className="movies__header">Movie List</div>
            <div className="movies__list">{renderMovieCard}</div>
        </div>
    );
};

export default MovieListing;
