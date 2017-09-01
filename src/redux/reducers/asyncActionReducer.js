import initialState from "./initialState";
import { actionTypes, status } from "../actions/_constants"

const FETCH_SUCCESS = actionTypes.FETCH + status.SUCCESS;
const FETCH_FAILURE = actionTypes.FETCH + status.FAILURE;
const FETCH_START = actionTypes.FETCH + status.START;

export default prefix => ({

    projectsReducer: (state = initialState.projects, action) => {
        switch(action.type) {
            case prefix + FETCH_SUCCESS:
                return state.concat(action.payload);
            default:
                return state;
        }
    },

    isFetchingProjectsReducer: (state = initialState.isFetchingProjects, action) => {
        switch(action.type) {
            case prefix + FETCH_SUCCESS || prefix + FETCH_FAILURE:
                return false;
            case prefix + FETCH_START:
                return true;
            default:
                return state;
        }
    }

})