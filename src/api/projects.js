export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "Shuffly",
            name: "Shuffly",
            subtitle: "The best place to discover new content on YouTube",
            description: "Thanks to its pseudo-random algorithms, Shuffly is the best place to discover new content on YouTube or just to chill and spend some time.<br/><br/>Shuffly is not a replacement for the YouTube app, they serve different purposes.<br/><br/>This app transforms YouTube in something similar to an old television, where the viewer doesn't have much control on what he sees. Similarly, with Shuffly the user can express a preference for the type of content, but can't select any specific video, the app does that for him. Therefore the focus is entirely on content discovery.",
            links: [ {url: "https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.shuffly", name: "See on the Play Store", icon: "fab fa-google-play"} ],
            secondaryLinks: [ {url: "http://pierfrancescosoffritti.github.io/Shuffly-Website/", name:"Learn more on the app's website", icon: "fas fa-external-link-alt"}, {url: "https://www.youtube.com/watch?v=lGDP27JCbIg&feature=share", name: "GadgetHacks review", icon: "fab fa-youtube"} ],
            labels: [ "android" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fshuffly_small.png?alt=media&token=9aba5eb2-2fc4-4f5c-bc12-cead60d47e26",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fshuffly.png?alt=media&token=b59b4ce9-069c-41d3-8495-d5d7cdec3074",
            highlight: true
        },
        {
            id: "OneCalculator",
            name: "One Calculator",
            subtitle: "The only calculator app you need on your Android phone",
            description: "One Calculator is capable of solving common and matrix calculations, unit and base conversions and of drawing mathematical functions.<br/><br/>The app has been quite successful on the PlayStore, with thousands of daily users from all around the world, more than 120.000 downloads and a rating of 4.6/5.<br/><br/>Most importantly ... it has been my daily driver for all my years at university :)",
            links: [ {url: "https://play.google.com/store/apps/details?id=it.onecalculator", name: "See on the Play Store", icon: "fab fa-google-play"} ],
            secondaryLinks: [ {url: "http://phandroid.com/2014/10/13/onecalc-material-design-calculator/", name: "PHAndroid review", icon: "fas fa-external-link-alt"} ],
            labels: [ "android" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fonecalculator_small.png?alt=media&token=a405d030-f610-44d0-af88-99f7255f094b",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fonecalculator.png?alt=media&token=017a5c17-e85b-4ede-be0f-2500d5493648",
            highlight: true
        },
        {
            id: "android-youtube-player",
            name: "android-youtube-player",
            subtitle: "YouTube Player library for Android, stable and customizable",
            description: "The android-youtube-player library provides a simple View that can be easily integrated in every Activity/Fragment.<br/><br/>The interaction with YouTube is based on the IFrame Player API, running inside of a WebView, therefore the YouTube app is not required to be installed on the user's device.<br/><br/>The web UI of the IFrame Player player is hidden, instead a native UI built on top of Android is used to interact with the player, providing a native experience to the users.<br/><br/>The UI of the player is 100% customizable. The default UI can be changed, to show and hide new views, or can be completely replaced by a custom UI.<br/><br/>This library also provides a Chromecast YouTube player, that you can use to cast YouTube videos from your app to a Chromecast device.",
            links: [ 
                { url: "https://github.com/PierfrancescoSoffritti/android-youtube-player", name: "Open project", icon: "fab fa-github"},
                { url: "https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.aytplayersample", name: "Download sample app", icon: "fab fa-google-play"}
            ],
            secondaryLinks: [ 
                { url: "https://medium.com/@soffritti.pierfrancesco/how-to-play-youtube-videos-in-your-android-app-c40427215230", name:"android-youtube-player, introduction", icon: "fab fa-medium"},
                { url: "https://medium.com/@soffritti.pierfrancesco/customize-android-youtube-players-ui-9f32da9e8505", name:"android-youtube-player, customization", icon: "fab fa-medium"},
                { url: "https://medium.com/@soffritti.pierfrancesco/how-to-send-youtube-videos-from-your-android-app-to-a-chromecast-device-541d59ea1260", name:"android-youtube-player, chromecast", icon: "fab fa-medium"}
            ],
            labels: [ "android", "library" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FAndroid-YouTube-Player_small.jpg?alt=media&token=4b7d8258-80b7-4260-bec5-38a56513d525",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FAndroid-YouTube-Player.jpg?alt=media&token=92c5cefa-9ee3-4b62-9e72-de875e9d5c6c",
            highlight: true
        },
        {
            id: "MicroMegaProject",
            name: "MicroMega",
            subtitle: "An interactive music experience powered by the web",
            description: "MicroMegaProject is a journey thorugh the levels of the new concept album of the italian artist Ottodix (Alessandro Zannier).<br/><br/>This web experience is part of an art exposition showcased around Europe. It is also being used by the artist to promote his lastest music album and artworks.",
            links: [ {url: "https://micromegaproject.com/", name: "Open the website", icon: "fas fa-external-link-alt"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fmicromega.jpg?alt=media&token=68a36722-1e96-46a2-bbdf-8ea2e88426a1",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fmicromega.jpg?alt=media&token=68a36722-1e96-46a2-bbdf-8ea2e88426a1",
            highlight: true
        },
        {
            id: "RemoteVR",
            name: "Remote VR",
            subtitle: "Multiplayer Virtual Reality in the cloud",
            description: "RemoteVR is a simple attempt to obtain platform/hardware independent multiplayer Virtual Reality in a way that should be affordable to almost everybody.<br/><br/>The the idea is to run the VR application on a server and then connect many clients to it, allowing them to interact with the VR application in streaming.<br/><br/>With this approach is easy to have more than one person in the same virtual environment. Also, these people can use different headsets and OS to access the same VR experience.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/RemoteVR_UnityServer", name: "Open project (Unity Server)", icon: "fab fa-github"}, {url: "https://github.com/PierfrancescoSoffritti/RemoteVR_AndroidClient", name:"Open project (Android Client)", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "VR", "android", "unity3D" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FremoteVR.gif?alt=media&token=bd857b90-80ac-41b6-9452-07b234141ebf",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FremoteVR.gif?alt=media&token=bd857b90-80ac-41b6-9452-07b234141ebf",
            highlight: false
        },
        {
            id: "DEVX2017",
            name: "DEVX 2017",
            subtitle: "A digital forest that grows into your browser",
            description: "This is a WebGL experiment I have hacked together for the 2017 edition of the Digital Design Days.<br/><br/>Everything in this experiment is generated at runtime, programmatically. Both graphics and sounds.",
            links: [ {url: "https://pierfrancescosoffritti.github.io/DEVX-Experiments-2017/", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://www.youtube.com/watch?v=kuLsG6gpzAM", name: "Watch video", icon: "fab fa-youtube"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/13.%20Nowherelands", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/sound-generation-with-javascript-57b2fda65608", name: "Sound generation with Javascript", icon: "fab fa-medium"}, {url: "https://medium.com/@soffritti.pierfrancesco/dynamic-reflections-in-three-js-2d46f3378fc4", name:"Dynamic reflections in Three.js", icon: "fab fa-medium"}, {url: "http://devx.ddd.it/en/", name: "Open DEVX experiments website", icon: "fas fa-external-link-alt"} ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fnowherelands_small.jpg?alt=media&token=48fd3dc1-5f98-4079-ae79-d1c371880379",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fnowherelands.png?alt=media&token=14a8210b-2468-4a8a-bed1-4d7d6e33cfba",
            highlight: false
        },
        {
            id: "DEVX2018",
            name: "DEVX 2018",
            subtitle: "WebGL experiment for DEVX 2018",
            description: "This is a WebGL experiment I have hacked together for the 2018 edition of the Digital Design Days.",
            links: [ {url: "https://pierfrancescosoffritti.github.io/DEVX-Experiments-2018/", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://www.youtube.com/watch?v=iST1-DvLhmg&t=0s&list=PLHqL12VZyHuMKFrKsthIEcoWLHInj9WSd&index=7", name: "Watch video", icon: "fab fa-youtube"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/18.%20Monolith", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "http://devx.ddd.it/en/", name: "Open DEVX experiments website", icon: "fas fa-external-link-alt"} ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fmonolith_small.jpg?alt=media&token=9c7a0a31-ea3b-4248-ab98-829f83795646",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fmonolith.png?alt=media&token=290e3357-701c-460e-a993-43e2fa814c91",
            highlight: false
        },
        {
            id: "BrokenMantra",
            name: "Broken Mantra",
            subtitle: "Demo-ish experiment hacked with Three.js",
            description: "A demo thing, built in one sleepless night.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/10.%20BrokenMantra/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/10.%20BrokenMantra", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fbrokenmantra.gif?alt=media&token=2e020b60-ddd2-489c-b5db-ea5d7de4c5c9",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fbrokenmantra.gif?alt=media&token=2e020b60-ddd2-489c-b5db-ea5d7de4c5c9",
            highlight: false
        },
        {
            id: "CollatzConjectureVisualization",
            name: "Collatz Conjecture",
            subtitle: "Math can be beautiful, at times",
            description: "Collatz Conjecture visualization, powered by the HTML5 canvas.<br/>Every drawing is generated in real-real time, refresh the page to generate a new shape.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/12.%20Collatz%20Conjecture/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/12.%20Collatz%20Conjecture", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://photos.app.goo.gl/udAm4xoUr6p87wms1", name: "Check out some images", icon: "fas fa-images"} ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcollatz_small.jpg?alt=media&token=1b957860-476d-4ee7-9070-524b484fd338",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcollatz.jpg?alt=media&token=8528ecd9-9c1f-4d91-a6f1-322d0925297f",
            highlight: false
        },
        {
            id: "SoUNds",
            name: "SoUNds",
            subtitle: "Sound generation and visualization with Javascript",
            description: "Press the keys on your keyboard and start playing music. Every sound is generated in real-time through code.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/4.%20SoUNds/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/4.%20SoUNds", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/sound-generation-with-javascript-57b2fda65608", name: "Sound generation with Javascript", icon: "fab fa-medium"} ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fsounds_small.jpg?alt=media&token=d612b833-f8ff-4aca-b63b-1750d04dde3a",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fsounds.jpg?alt=media&token=f95cf4e0-0ebe-4abe-b2c3-3a6825818ffb",
            highlight: false
        },
        {
            id: "EyeBalls",
            name: "Eye Balls",
            subtitle: "Interactive WebGL experiment",
            description: "Move your mouse and let the eyes do their thing.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/9.%20EyeBall/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/9.%20EyeBall", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/glossy-spheres-in-three-js-bfd2785d4857", name:"Glossy spheres in Three.js", icon: "fab fa-medium"} ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Feyeballs_small.jpg?alt=media&token=abcfbd6f-1d02-47f4-bb66-e262c81d0c29",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Feyeballs.png?alt=media&token=90a107ce-98e7-4ded-a649-057ce7db0d0c",
            highlight: false
        },
        {
            id: "NeonCrystal",
            name: "NeonCrystal",
            subtitle: "Interactive WebGL experiment",
            description: "The result of some early hacking with Three.js.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/6.%20NeonCrystal/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/6.%20NeonCrystal", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/dynamic-reflections-in-three-js-2d46f3378fc4", name:"Dynamic reflections in Three.js", icon: "fab fa-medium"} ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fneoncrystal_small.jpg?alt=media&token=8c47849e-e1e1-4ffa-bdd8-b591b8fb3c47",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fneoncrystal.png?alt=media&token=930c1840-7cfc-4983-8e55-e9398ad8c685",
            highlight: false
        },
        {
            id: "FloriDada",
            name: "FloriDada",
            subtitle: "Interactive WebGL experiment",
            description: "Fun project done in an evening, just to do some practise with Javascript and hack around with the HTML5 canvas and Web Audio API.<br/><br/>It's not very well built, it may not work with Safari and maybe other browsers D: use it with Chrome :)",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/3.%20WTPlayer/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FfloriDada_small.jpg?alt=media&token=ffbb5ac7-a9e6-496a-952c-946562d941d6",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FfloriDada.png?alt=media&token=622c7cb3-3b4a-40d0-ad63-f33433fb61b3",
            highlight: false
        },
        {
            id: "HeightMapGenerator",
            name: "HeightMap Generator",
            subtitle: "Java heightmap generator based on Perlin Noise and Simplex Noise",
            description: "The app can send data through web socket to a Javascript application, that is capable of generating the 3D model of the heightmap.<br/><br/>The maps can be rendered and moved in real-time and with different visual effects.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/HeightMapGenerator", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://www.youtube.com/watch?v=CLzB6qL86qQ", name: "Simplex Noise video", icon: "fab fa-youtube"}, {url: "https://www.youtube.com/watch?v=IBLfilm35xU", name:"Perlin Noise video", icon: "fab fa-youtube"} ],
            labels: [ "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fheightmapgenerator_small.jpg?alt=media&token=68e80839-368e-4ae2-a67d-00dcb61afa96",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fheightmapgenerator.png?alt=media&token=a6735d97-9015-47f1-87b2-387703108e9f",
            highlight: false
        },
        {
            id: "TerrainGenerator",
            name: "Terrain Generator",
            description: "A very basic and hacky javascript terrain generator based on Perlin Noise and Three.js.<br/><br/>Heightmaps can be generated inside the web app or taken from an external source through web socket.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/TerrainGenerator/master/index.html", name: "Open the experiment", icon: "fas fa-external-link-alt"}, {url: "https://github.com/PierfrancescoSoffritti/TerrainGenerator", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fterraingenerator_small.jpg?alt=media&token=35c8965c-7b02-4486-b7a1-488c0ff615af",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fterraingenerator.png?alt=media&token=cf4195b0-3dd6-4b01-97bf-c683fdb4c19d",
            highlight: false
        },
        {
            id: "EyeSwapper",
            name: "EyeSwapper",
            subtitle: "Fun with the Google Vision API",
            description: "Simple app made for fun, it uses the Google Vision API to find the eyes of the people in a picture and then attaches each pair of eyes to another face ... lol.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/EyeSwapper", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "android", "AR" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FeyeSwapper_small.jpg?alt=media&token=10d2cab1-69af-4b8e-9880-11038462e90e",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FeyeSwapper.png?alt=media&token=ad8fe830-f1d3-4f24-8f67-fbb14c25fae5",
            highlight: false
        },
        {
            id: "ARcoreDemo",
            name: "ARcore Demo",
            subtitle: "Simple ARcore demo built in an afternoon",
            description: "Simple demo app built with Unity to try ARcore.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/ARcoreDemo", name: "Open project", icon: "fab fa-github"}, {url: "https://www.youtube.com/watch?v=gmws6UhPSNY", name: "Watch video", icon: "fab fa-youtube"}, {url: "https://github.com/PierfrancescoSoffritti/ARcoreDemo/raw/master/demo.apk", name: "Download apk", icon: "fas fa-download"}],
            secondaryLinks: [ ],
            labels: [ "android", "AR" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FARcoreDemo_small.jpg?alt=media&token=cc1d5b18-6fbd-45fd-885a-26c8f5a57d3c",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FARcoreDemo.jpg?alt=media&token=484c6126-9104-41d7-965b-e1e20ebd80db",
            highlight: false
        },
        {
            id: "handy",
            name: "Handy",
            subtitle: "Hand detection software written in C++ using OpenCV.",
            description: "Handy is a hand detection software written in C++ using OpenCV. The software is capable of recognizing hands in an video and of counting the number of lifted fingers.",
            links: [ 
                { url: "https://github.com/PierfrancescoSoffritti/Handy", name: "Open project", icon: "fab fa-github"},
                { url: "https://www.youtube.com/watch?v=z8rWGQyIQAE", name: "Watch demo", icon: "fab fa-youtube"},
            ],
            secondaryLinks: [ 
                { url: "https://medium.com/@soffritti.pierfrancesco/handy-hands-detection-with-opencv-ac6e9fb3cec1", name: "Handy - hand detection", icon: "fab fa-medium"}
            ],
            labels: [ "CV", "AR" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fhandy.gif?alt=media&token=5be94e86-f2bc-4875-a947-7a9363ae8381",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fhandy.gif?alt=media&token=5be94e86-f2bc-4875-a947-7a9363ae8381",
            highlight: false
        },
        {
            id: "SlidingDrawer",
            name: "SlidingDrawer",
            subtitle: "Android custom View implementing the bottom sheet pattern",
            description: "I've built this library while I was working on Shuffly, no other open source library was good for my use case.<br/><br/>The substantial difference from all other implementations of the bottom sheet pattern is that in this case it's easy to position the slidable view relative to the non slidable views in the layout. In other implementations the only way to control the position of the slidable view, when collapsed, is by using a an offset. Here instead the slidable view is placed exactly below the non slidable view, just like in a vertical LinearLayout. The slidable view is conceptually part of the views hierarchy and not above it.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/SlidingDrawer", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "android", "library" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FSlidingDrawer.gif?alt=media&token=229574ee-872b-4411-9550-c656cf5b1de8",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FSlidingDrawer.gif?alt=media&token=229574ee-872b-4411-9550-c656cf5b1de8",
            highlight: false
        },
        {
            id: "chromecast-youtube-player",
            name: "chromecast-player",
            subtitle: "Extension for the android-youtube-player library, enables Google Cast functionalities",
            description: "YouTube doesn't offer any official API to cast YouTube videos from an app to a Google Cast enabled device. To fill this gap I have built an extension library for the android-youtube-player, called chromecast-sender.<br/><br/>The scope of this library is to provide the basic framework and utilities needed to play YouTube videos on a Google Cast enabled device.",
            links: [ 
                { url: "https://github.com/PierfrancescoSoffritti/android-youtube-player", name: "Open project", icon: "fab fa-github"},
                { url: "https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.cytplayersample", name: "Download sample app", icon: "fab fa-google-play"}
            ],
            secondaryLinks: [
                { url: "https://medium.com/@soffritti.pierfrancesco/how-to-send-youtube-videos-from-your-android-app-to-a-chromecast-device-541d59ea1260", name:"chromecast-youtube-player", icon: "fab fa-medium"}
            ],
            labels: [ "android", "library" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fchromecast-youtube-player_small.jpg?alt=media&token=3f7b8b8c-ba62-4fb9-b2e8-5f3a396353d9",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fchromecast-youtube-player.jpg?alt=media&token=d96a2a83-dcfb-4a73-abf7-3b391ae7752c",
            highlight: false
        },
        {
            id: "GoogleOAuth",
            name: "GoogleOAuth",
            subtitle: "WebView-based OAuth authentication library for Android",
            description: "I've built this library while I was working on Shuffly, in order to overcome a limitation of the Google authentication apis.<br/><br/>All of the authentication libraries for Android provided by Google suffer of the same problem: they don't allow access to secondary accounts (also called linked accounts) and force the user to always log into his main account. This is not a problem in most cases, but for some apps can be a huge limitation. For example: YouTube allows an account to have a main channel and multiple secondary channels. Some users may use regularly the secondary channels, so if you're building an app that lets them authenticate in their YouTube channel, you must provide the option to log into both the main channel and the secondary channels. Otherwise they won't use your app.<br/><br/>Apparently the only way to have this basic functionality is to use the web-based OAuth process. This library implements web-based OAuth as user friendly as possible, in order to solve the problem illustared above.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/GoogleWebOAuth", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "android", "library" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FGoogleOAuth_small.jpg?alt=media&token=b1e61a03-ef85-4aed-be53-73dc2175af2c",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FGoogleOAuth.jpg?alt=media&token=aaa7b1cc-91f0-44bc-9e5e-29d4c73bcda9",
            highlight: false
        },
        {
            id: "Renders",
            name: "Renders",
            description: "Some modeling/rendering work I do for fun with Blender.",
            links: [ {url: "https://photos.google.com/share/AF1QipO4ZH0lQol9cG5XBL9_kViMg845HoVV2WJUVv4W42skktTJdtgsllbOHu5T5BpBCA?key=dTNZNTRhXzY3ZDJPUzRObERYc3NFWjJZSkRzSWJn", name: "Open album", icon: "fas fa-images"} ],
            secondaryLinks: [ ],
            labels: [ "blender" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcomputergraphics_small.jpg?alt=media&token=4b0fbc22-bfe6-46cd-855d-36ff25b30b68",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcomputergraphics.jpg?alt=media&token=310024a2-5493-4bf4-a85b-cd94668656ff",
            highlight: false
        } ] ) )
}