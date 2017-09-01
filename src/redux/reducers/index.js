import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants"

import getAsyncActionReducers from "./asyncActionReducer";

const projectsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.PROJECTS,
    objectsInitialState: initialState.projects,
    isFetchingInitialState: initialState.isFetchingProjects
});

export default combineReducers({
    projects: projectsReducers.projectsReducer,
    isFetchingProjects: projectsReducers.isFetchingProjectsReducer
});