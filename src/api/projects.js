export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "Shuffly",
            name: "Shuffly",
            description: "Thanks to its pseudo-random algorithms, Shuffly is the best place to discover new content on YouTube or just to chill and spend some time.<br/><br/>Shuffly is not a replacement for the YouTube app, they serve different purposes.<br/><br/>Shuffly transforms YouTube in something similar an old television, where the user is able to choose the channel, but not exactly what he's going to see. Therefore the focus in entirely on content discovery.",
            links: [ {url: "https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.shuffly", name: "Get Shuffly on the PlayStore", icon: "android"}, {url: "http://pierfrancescosoffritti.github.io/Shuffly-Website/", name:"Learn more on the app's website", icon: "external-link"} ],
            secondaryLinks: [ {url: "https://www.youtube.com/watch?v=lGDP27JCbIg&feature=share", name: "GadgetHacks review", icon: "youtube-play"} ],
            labels: [ "android" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fshuffly.png?alt=media&token=b59b4ce9-069c-41d3-8495-d5d7cdec3074",
            highlight: true
        },
        {
            id: "OneCalculator",
            name: "One Calculator",
            description: "One Calculator is the only calculator app you need on your Android device :)<br/><br/>The app is capable of solving common calculations, matrix calculations, conversions between units of measurement and number bases and of drawing graphs of functions.<br/><br/>One Calculator has been quite successful on the PlayStore and now has more than 100.000 downloads and a rating of 4.6/5",
            links: [ {url: "https://play.google.com/store/apps/details?id=it.onecalculator", name: "Get One Calculator on the PlayStore", icon: "android"} ],
            secondaryLinks: [ {url: "http://phandroid.com/2014/10/13/onecalc-material-design-calculator/", name: "PHAndroid review", icon: "external-link"} ],
            labels: [ "android" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fonecalculator.png?alt=media&token=017a5c17-e85b-4ede-be0f-2500d5493648",
            highlight: true
        },
        {
            id: "MicroMegaProject",
            name: "MicroMega",
            description: "An interactive music player I've built for the italian artist Ottodix (Alessandro Zannier).<br/>The player is used to showcase his latest music album and artworks.",
            links: [ {url: "https://micromegaproject.com/", name: "Open the website", icon: "external-link"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fmicromega.jpg?alt=media&token=68a36722-1e96-46a2-bbdf-8ea2e88426a1",
            highlight: true
        },
        {
            id: "RemoteVR",
            name: "Remote VR",
            description: "RemoteVR is a simple attempt to obtain platform/hardware independent multiplayer Virtual Reality in a way that should be affordable to almost anybody.<br/><br/>The gist of the idea is to run the VR application on a server and then connect many clients to it, allowing them to interact with the VR application in streaming.<br/><br/>Using this approach is easy to have more than one person in the same virtual environment. Also, those people can use different devices and OS to access the same VR experience.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/RemoteVR_UnityServer", name: "Go to the Unity Server", icon: "github"}, {url: "https://github.com/PierfrancescoSoffritti/RemoteVR_AndroidClient", name:"Go to the Android Client", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "VR", "android", "unity3D" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FremoteVR.gif?alt=media&token=bd857b90-80ac-41b6-9452-07b234141ebf",
            highlight: false
        },
        {
            id: "Nowherelands",
            name: "Nowherelands",
            description: "A WebGL experiment I've built for the 2017 edition of the Digital Design Days.",
            links: [ {url: "https://pierfrancescosoffritti.github.io/Nowherelands/", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/13.%20Nowherelands", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/sound-generation-with-javascript-57b2fda65608", name: "Sound generation with Javascript", icon: "medium"}, {url: "https://medium.com/@soffritti.pierfrancesco/dynamic-reflections-in-three-js-2d46f3378fc4", name:"Dynamic reflections in Three.js", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fnowherelands.png?alt=media&token=14a8210b-2468-4a8a-bed1-4d7d6e33cfba",
            highlight: false
        },
        {
            id: "BrokenMantra",
            name: "Broken Mantra",
            description: "Demo-ish thing built with Three.js.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/10.%20BrokenMantra/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/10.%20BrokenMantra", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fbrokenmantra.gif?alt=media&token=2e020b60-ddd2-489c-b5db-ea5d7de4c5c9",
            highlight: false
        },
        {
            id: "CollatzConjectureVisualization",
            name: "Collatz Conjecture",
            description: "Collatz Conjecture visualization, powered by the HTML5 canvas.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/12.%20Collatz%20Conjecture/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/12.%20Collatz%20Conjecture", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://photos.app.goo.gl/udAm4xoUr6p87wms1", name: "Check out some images", icon: "photo"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcollatz.jpg?alt=media&token=8528ecd9-9c1f-4d91-a6f1-322d0925297f",
            highlight: false
        },
        {
            id: "SoUNds",
            name: "SoUNds",
            description: "Generate and visualize sound in JavaScript :)",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/4.%20SoUNds/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/4.%20SoUNds", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/sound-generation-with-javascript-57b2fda65608", name: "Sound generation with Javascript", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fsounds.jpg?alt=media&token=f95cf4e0-0ebe-4abe-b2c3-3a6825818ffb",
            highlight: false
        },
        {
            id: "EyeBalls",
            name: "Eye Balls",
            description: "Hacking around with Three.js",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/9.%20EyeBall/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/9.%20EyeBall", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/glossy-spheres-in-three-js-bfd2785d4857", name:"Glossy spheres in Three.js", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Feyeballs.png?alt=media&token=90a107ce-98e7-4ded-a649-057ce7db0d0c",
            highlight: false
        },
        {
            id: "NeonCrystal",
            name: "NeonCrystal",
            description: "Hacking around with Three.js",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/6.%20NeonCrystal/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/6.%20NeonCrystal", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/dynamic-reflections-in-three-js-2d46f3378fc4", name:"Dynamic reflections in Three.js", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fneoncrystal.png?alt=media&token=930c1840-7cfc-4983-8e55-e9398ad8c685",
            highlight: false
        },
        {
            id: "FloriDada",
            name: "FloriDada",
            description: "Fun project done in an evening, in order to do some practise with JavaScript and hack around with the HTML5 canvas and Web Audio API.<br/><br/>It's not very well built, it may not work with Safari and maybe other browsers D: use it with Chrome :)",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/3.%20WTPlayer/index.html", name: "Open the experiment", icon: "external-link"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FfloriDada.png?alt=media&token=622c7cb3-3b4a-40d0-ad63-f33433fb61b3",
            highlight: false
        },
        {
            id: "HeightMapGenerator",
            name: "HeightMap Generator",
            description: "A Java heightmap generator based on Perlin Noise and Simplex Noise.<br/><br/>The app can send data through web socket to a javascript application that is capable of generating the 3D model of the heightmap.<br/><br/>The maps can be rendered and moved in real time and with different visual effects.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/HeightMapGenerator", name: "Open the project", icon: "github"} ],
            secondaryLinks: [ {url: "https://www.youtube.com/watch?v=CLzB6qL86qQ", name: "Simplex Noise video", icon: "youtube-play"}, {url: "https://www.youtube.com/watch?v=IBLfilm35xU", name:"Perlin Noise video", icon: "youtube-play"} ],
            labels: [ "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fheightmapgenerator.png?alt=media&token=a6735d97-9015-47f1-87b2-387703108e9f",
            highlight: false
        },
        {
            id: "TerrainGenerator",
            name: "Terrain Generator",
            description: "A very basic and hacky javascript terrain generator based on Perlin Noise and Three.js.<br/><br/>Heightmaps can be generated inside the web app or taken from an external source, through web socket.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/TerrainGenerator/master/index.html", name: "Open the experiment", icon: "external-link"} ],
            secondaryLinks: [ {url: "https://github.com/PierfrancescoSoffritti/TerrainGenerator", name: "GitHub", icon: "github"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fterraingenerator.png?alt=media&token=cf4195b0-3dd6-4b01-97bf-c683fdb4c19d",
            highlight: false
        },
        {
            id: "ComputerGraphics",
            name: "Computer Graphics",
            description: "Some CG works I do for fun.",
            links: [ {url: "https://photos.google.com/share/AF1QipO4ZH0lQol9cG5XBL9_kViMg845HoVV2WJUVv4W42skktTJdtgsllbOHu5T5BpBCA?key=dTNZNTRhXzY3ZDJPUzRObERYc3NFWjJZSkRzSWJn", name: "Open album", icon: "photo"} ],
            secondaryLinks: [ ],
            labels: [ "CG" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcomputergraphics.jpg?alt=media&token=310024a2-5493-4bf4-a85b-cd94668656ff",
            highlight: false
        } ] ) )
}