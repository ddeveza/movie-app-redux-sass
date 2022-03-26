import React, {useEffect} from "react";

import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../api/movieapi";
import {APIKey} from "../../api/movieapikey";
import {useDispatch} from "react-redux";
import {addMovies} from "../../features/movies/moviesSlice";

const Home = () => {
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=Harry&type=movie`).catch((err) => console.log(err));
        console.log(response);
        dispatch(addMovies(response.data));
    };
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <div className="banner-img">
            <MovieListing />
        </div>
    );
};

export default Home;
