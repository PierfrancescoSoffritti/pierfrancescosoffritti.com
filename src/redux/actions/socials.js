import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../api/socials"

export const fetchSocials = getAsyncAction({ actionTypePrefix: prefixes.SOCIALS+actionTypes.FETCH, asyncFunc: apis.fetchSocials });