import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../api/projects"

const actionTypePrefix_fetch = prefixes.PROJECTS+actionTypes.FETCH;
const asyncAction_fetch = apis.fetchProjects;

export const fetchProjects = getAsyncAction(actionTypePrefix_fetch, asyncAction_fetch);