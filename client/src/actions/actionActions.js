import { actionConstants } from './types';
import axios from 'axios';

export const getAllActions = () => dispatch => {
    dispatch({ type: actionConstants.FETCH_ACTIONS_REQUEST });
    axios.get('http://localhost:8080/api/project/:id/actions')
        .then(res => {
            dispatch({ type: actionConstants.FETCH_ACTIONS_SUCCESS,
                        payload: res.data })
        })
        .catch(err => {
            dispatch({ type: actionConstants.FETCH_ACTIONS_FAILURE })
        })
}