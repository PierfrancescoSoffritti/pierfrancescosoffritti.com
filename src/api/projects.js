import img from "../assets/images/nowherelands.png";

export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            name: "One Calc",
            labels: [ "android", "vr" ],
            img: "https://raw.githubusercontent.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/gh-pages/img/portfolio/blender.jpg",
            highlight: true
        },
        {
            name: "Shuffly",
            labels: [ "web exp", "web dev" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/brokenmantra.gif?raw=true",
            highlight: false
        },
        {
            name: "test1",
            labels: [ "android", "ar" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/gyroscope.gif?raw=true",
            highlight: false
        },
        {
            name: "test2",
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/micromega.jpg?raw=true",
            highlight: true
        },
        {
            name: "test3",
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/collatz.jpg?raw=true",
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
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/shuffly.png?raw=true",
            highlight: true
        } ] ) )
}