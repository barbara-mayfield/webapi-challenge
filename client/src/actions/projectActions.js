import { projectConstants } from './types';
import axios from 'axios';

export const getAllProjects = () => dispatch => {
    dispatch({ type: projectConstants.FETCH_PROJECTS_REQUEST });
    axios.get('http://localhost:8080/api/project')
        .then(res => {
            dispatch({ type: projectConstants.FETCH_PROJECTS_SUCCESS,
                        payload: res.data })
        })
        .catch(err => {
            dispatch({ type: projectConstants.FETCH_PROJECTS_FAILURE })
        })
}