import { projectConstants } from '../actions/types';

export const initialState = {
    projects: [],
    actions: []
}

export default function postReducer(state = initialState, action) {
    switch(action.type) {
        case projectConstants.FETCH_PROJECTS_REQUEST: 
            return {
                ...state
            }
        case projectConstants.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.payload
            }
        case projectConstants.FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                error: 'Failed to fetch users!'
            }
        default: 
            return state;
    }
}