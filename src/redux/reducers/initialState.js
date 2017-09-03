import { List } from "immutable"

export default {
    projects: new List(),
    blogPosts: new List(),
    socials: new List(),

    isFetchingProjects: false,
    isFetchingBlogPosts: false,
    isFetchingSocials: false,
}