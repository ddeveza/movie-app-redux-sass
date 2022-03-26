import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: {},
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
    },
});

export const {addMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
