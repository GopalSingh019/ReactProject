import React from 'react'
import { SEARCH_MOVIES ,Recommended_MOVIES,Movies_Detail} from './MovesActionType'

const initialState = {
    Loading: true,
    searchMovies: {},
    Recommended: {},
    MovieDetail:{}
}

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES: return {
            ...state,
            Loading: false,
            searchMovies: action.payload
        }
        case Recommended_MOVIES: return {
            ...state,
            Loading: false,
            Recommended: action.payload
        }
        case Movies_Detail:return {
            ...state,
            Loading:false,
            MovieDetail: action.payload
        }
        default: return state
    }
}
