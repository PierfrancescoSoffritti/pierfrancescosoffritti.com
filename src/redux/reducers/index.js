import { combineReducers } from "redux";
import { prefixes } from "../actions/_constants"

import asyncActionReducer from "./asyncActionReducer";

const projectsReducers = asyncActionReducer(prefixes.PROJECTS);

export default combineReducers({
    projects: projectsReducers.projectsReducer,
    isFetchingProjects: projectsReducers.isFetchingProjectsReducer
});