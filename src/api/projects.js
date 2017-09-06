export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "OneCalculator",
            name: "One Calc",
            labels: [ "android", "vr" ],
            img: "https://raw.githubusercontent.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/gh-pages/img/portfolio/blender.jpg",
            highlight: true
        },
        {
            id: "Shuffly",
            name: "Shuffly",
            labels: [ "web exp", "web dev" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/brokenmantra.gif?raw=true",
            highlight: false
        },
        {
            id: "test1",
            name: "test1",
            labels: [ "android", "ar" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/gyroscope.gif?raw=true",
            highlight: false
        },
        {
            id: "test2",
            name: "test2",
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/micromega.jpg?raw=true",
            highlight: true
        },
        {
            id: "test3",
            name: "test3",
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/collatz.jpg?raw=true",
            highlight: false
        },
        {
            id: "test4",
            name: "test4",
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/collatz.jpg?raw=true",
            highlight: false
        },
        {
            id: "test4",
            name: "test5",
            labels: [ "android" ],
            img: "https://github.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/blob/gh-pages/img/portfolio/shuffly.png?raw=true",
            highlight: true
        } ] ) )
}