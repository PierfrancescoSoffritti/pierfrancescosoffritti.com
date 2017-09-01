import { prefixes, actionTypes } from "./_constants"
import asyncActionUtils from "./asyncActionUtils"
import apis from "../../api/projects"

const asyncActionGenerator = asyncActionUtils(prefixes.PROJECTS + actionTypes.FETCH)

export const fetchProjects = asyncActionGenerator(apis.fetchProjects);