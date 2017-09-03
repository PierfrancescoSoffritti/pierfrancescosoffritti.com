import img from "../assets/images/nowherelands.png";

export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            name: "One Calc",
            labels: [ "android", "vr" ],
            img: img
        },
        {
            name: "Shuffly",
            labels: [ "android", "web experiment", "web dev" ],
            img: img
        },
        {
            name: "test1",
            labels: [ "android", "AR" ],
            img: img
        },
        {
            name: "test2",
            labels: [ "android" ],
            img: img
        },
        {
            name: "test3",
            labels: [ "android" ],
            img: img
        },
        {
            name: "test4",
            labels: [ "android" ],
            img: img
        },
        {
            name: "test5",
            labels: [ "test1", "test2", "test3" ],
            img: img
        } ] ) )
}