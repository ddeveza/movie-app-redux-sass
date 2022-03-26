import {createSelector} from "@reduxjs/toolkit";

export const getMovies = createSelector(
    (state) => state.movies,
    (movies) => {
        return movies;
    }
);
