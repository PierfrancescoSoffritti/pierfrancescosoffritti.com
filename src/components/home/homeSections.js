import About from "./about/About";
import WorkContainer from "./work/WorkContainer";
// import Blog from "./blog/Blog";
import Contact from "./contact/Contact";

const SECTIONS = [
    {
        name: "about",
        component: About
    },
    {
        name: "work",
        component: WorkContainer
    },
    {
        name: "blog",
        component: null
    },
    {
        name: "contact",
        component: Contact
    }
]   

export default SECTIONS;