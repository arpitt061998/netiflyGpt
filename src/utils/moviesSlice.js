import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        trailerVideo: null,
        currentVideo: null
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload
        },
        addCurrentVideo : (state, action) => {
            state.currentVideo = action.payload
        }
    }
});

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo, addCurrentVideo} = moviesSlice.actions
export default moviesSlice.reducer;