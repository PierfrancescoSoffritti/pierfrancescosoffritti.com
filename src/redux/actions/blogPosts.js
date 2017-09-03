import { prefixes, actionTypes } from "./_constants"
import getAsyncAction from "./asyncActionUtils"
import apis from "../../api/blogPosts"

export const fetchBlogPosts = getAsyncAction({ actionTypePrefix: prefixes.BLOG_POSTS+actionTypes.FETCH, asyncFunc: apis.fetchBlogPosts });