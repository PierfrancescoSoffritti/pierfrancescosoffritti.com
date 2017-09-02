import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../api/projects"

export const fetchProjects = getAsyncAction({ actionTypePrefix: prefixes.PROJECTS+actionTypes.FETCH, asyncFunc: apis.fetchProjects });