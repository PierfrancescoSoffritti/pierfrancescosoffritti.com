import * as actions from "./_constants"
import apis from "../../api/projects"

const fetchSuccess = projects => {
    return {
        type: actions.FETCH_PROJECTS_SUCCESS,
        payload: projects
    }
}

const fetchFailure = error => {
    return {
        type: actions.FETCH_PROJECTS_FAILURE,
        payload: error
    }
}

export const fetchAsync = () => {
    return dispatch => {
        apis.fetchProjects().then( projects => dispatch( fetchSuccess(projects) ) ).error( error => dispatch( fetchFailure(error) ) )
    };
};