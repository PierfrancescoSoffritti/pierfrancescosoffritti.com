import { combineReducers } from "redux";

import initialState from "./initialState";
import { prefixes } from "../actions/_constants"

import getAsyncActionReducers from "./asyncActionReducer";

const projectsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.PROJECTS,
    objectsInitialState: initialState.projects,
    isFetchingInitialState: initialState.isFetchingProjects
});

const blogPostsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.BLOG_POSTS,
    objectsInitialState: initialState.blogPosts,
    isFetchingInitialState: initialState.isFetchingBlogPosts
});

const socialsReducers = getAsyncActionReducers({ 
    actionTypePrefix: prefixes.SOCIALS,
    objectsInitialState: initialState.socials,
    isFetchingInitialState: initialState.isFetchingSocials
});

export default combineReducers({
    projects: projectsReducers.objectsReducer,
    blogPosts: blogPostsReducers.objectsReducer,
    socials: socialsReducers.objectsReducer,
    
    isFetchingProjects: projectsReducers.isFetchingReducer,
    isFetchingBlogPosts: blogPostsReducers.isFetchingReducer,
    isFetchingSocials: socialsReducers.isFetchingReducer,
});