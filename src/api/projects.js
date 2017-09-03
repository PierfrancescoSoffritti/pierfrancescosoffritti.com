import img from "../assets/images/nowherelands.png";

export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            name: "One Calc",
            labels: [ "android", "vr" ],
            img: img,
            highlight: true
        },
        {
            name: "Shuffly",
            labels: [ "web exp", "web dev" ],
            img: img,
            highlight: false
        },
        {
            name: "test1",
            labels: [ "android", "ar" ],
            img: img,
            highlight: false
        },
        {
            name: "test2",
            labels: [ "android" ],
            img: img,
            highlight: true
        },
        {
            name: "test3",
            labels: [ "android" ],
            img: img,
            highlight: false
        },
        {
            name: "test4",
            labels: [ "android" ],
            img: img,
            highlight: false
        },
        {
            name: "test5",
            labels: [ "test1", "test2", "test3" ],
            img: img,
            highlight: true
        } ] ) )
}