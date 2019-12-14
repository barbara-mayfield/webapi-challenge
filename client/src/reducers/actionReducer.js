import { actionConstants } from '../actions/types'
import { initialState } from './projectReducer'

export default function actionReducer(state = initialState, action) {
    switch(action.type) {
        case actionConstants.FETCH_ACTIONS_REQUEST: 
            return {
                ...state
            }
        case actionConstants.FETCH_ACTIONS_SUCCESS:
            return {
                ...state,
                actions: action.payload
            }
        case actionConstants.FETCH_ACTIONS_FAILURE:
            return {
                ...state,
                error: 'Failed to fetch actions!'
            }
        default: 
            return state;
    }
}