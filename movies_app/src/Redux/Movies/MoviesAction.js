import React from 'react'
import axios from 'axios'
import { SEARCH_MOVIES, Recommended_MOVIES,Movies_Detail } from './MovesActionType'

export function SearchMoviesSuccess(items) {
    return ({
        type: SEARCH_MOVIES,
        payload: items
    }
    )
}



export  function RecommendedMoviesSuccess(items) {
    return ({
        type: Recommended_MOVIES,
        payload: items
    }
    )
}

function MovieDetailSuccess(items){
    return {
        type:Movies_Detail,
        payload:items
    }
}



export  function SearchMovies() {
    return ((dispatch) => {
        try {
            const response = axios.get();
            const items = response.data();
            dispatch(SearchMoviesSuccess(items))
        } catch (err) {
            console.log(err);
        }
    }
    )
}

export  function RecommendedMovies(url) {
    return (async (dispatch) => {
        try {
            const response =await axios.get(url);
            console.log('searchsuccessfromacton.js'+response.data);
            const items = response.data;
            dispatch(RecommendedMoviesSuccess(items))
        } catch (err) {
            console.log(err);
        }
    }
    )
}

export function MovieDetails(url){
    return(
        async (dispatch)=>{
            try{
            const response=await axios.get(url);
            const data=response.data;
            dispatch(MovieDetailSuccess(data));
            }catch(err){
                console.log(err);
            }
        }
    );
}