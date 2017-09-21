export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "Shuffly",
            name: "Shuffly",
            subtitle: "The best place to discover new content on YouTube",
            description: "Thanks to its pseudo-random algorithms, Shuffly is the best place to discover new content on YouTube or just to chill and spend some time.<br/><br/>Shuffly is not a replacement for the YouTube app, they serve different purposes.<br/><br/>This app transforms YouTube in something similar to an old television, where the viewer doesn't have much control on what he sees. Similarly with Shuffly the user can express a preference for the type of content, but can't select any specific video, the app does that for him. Therefore the focus is entirely on content discovery.",
            links: [ {url: "https://play.google.com/store/apps/details?id=com.pierfrancescosoffritti.shuffly", name: "See on the Play Store", icon: "android"} ],
            secondaryLinks: [ {url: "http://pierfrancescosoffritti.github.io/Shuffly-Website/", name:"Learn more on the app's website", icon: "external-link"}, {url: "https://www.youtube.com/watch?v=lGDP27JCbIg&feature=share", name: "GadgetHacks review", icon: "youtube-play"} ],
            labels: [ "android" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fshuffly.png?alt=media&token=b59b4ce9-069c-41d3-8495-d5d7cdec3074",
            highlight: true
        },
        {
            id: "OneCalculator",
            name: "One Calculator",
            subtitle: "The only calculator app you need on your Android phone",
            description: "One Calculator is capable of solving common and matrix calculations, unit and base conversions and of drawing mathematical functions.<br/><br/>The app has been quite successful on the PlayStore, with thousands of daily users from all around the world, more than 120.000 downloads and a rating of 4.6/5.<br/><br/>Most importantly ... it has been my daily driver for all my years at university :)",
            links: [ {url: "https://play.google.com/store/apps/details?id=it.onecalculator", name: "See on the Play Store", icon: "android"} ],
            secondaryLinks: [ {url: "http://phandroid.com/2014/10/13/onecalc-material-design-calculator/", name: "PHAndroid review", icon: "external-link"} ],
            labels: [ "android" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fonecalculator.png?alt=media&token=017a5c17-e85b-4ede-be0f-2500d5493648",
            highlight: true
        },
        {
            id: "MicroMegaProject",
            name: "MicroMega",
            subtitle: "An interactive music experience powered by the web",
            description: "MicroMegaProject is a journey thorugh the levels of the new concept album of the italian artist Ottodix (Alessandro Zannier).<br/><br/>This web experience is part of an art exposition showcased around Europe. It is also being used by the artist to promote his lastest music album and artworks.",
            links: [ {url: "https://micromegaproject.com/", name: "Open the website", icon: "external-link"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fmicromega.jpg?alt=media&token=68a36722-1e96-46a2-bbdf-8ea2e88426a1",
            highlight: true
        },
        {
            id: "RemoteVR",
            name: "Remote VR",
            subtitle: "Multiplayer Virtual Reality in the cloud",
            description: "RemoteVR is a simple attempt to obtain platform/hardware independent multiplayer Virtual Reality in a way that should be affordable to almost everybody.<br/><br/>The the idea is to run the VR application on a server and then connect many clients to it, allowing them to interact with the VR application in streaming.<br/><br/>With this approach is easy to have more than one person in the same virtual environment. Also, these people can use different headsets and OS to access the same VR experience.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/RemoteVR_UnityServer", name: "Go to the Unity Server", icon: "github"}, {url: "https://github.com/PierfrancescoSoffritti/RemoteVR_AndroidClient", name:"Go to the Android Client", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "VR", "android", "unity3D" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FremoteVR.gif?alt=media&token=bd857b90-80ac-41b6-9452-07b234141ebf",
            highlight: false
        },
        {
            id: "Nowherelands",
            name: "Nowherelands",
            subtitle: "Get lost in a digital forest that grows directly into your browser",
            description: "This is a WebGL experiment I have hacked together for the 2017 edition of the Digital Design Days, among many others incredible developers.<br/><br/>Everything in this experiment is generated at runtime, with code. Both graphics and sounds. The web is pretty amazing :)",
            links: [ {url: "https://pierfrancescosoffritti.github.io/Nowherelands/", name: "Open the experiment", icon: "external-link"}, {url: "https://www.youtube.com/watch?v=kuLsG6gpzAM", name: "Watch the video", icon: "youtube-play"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/13.%20Nowherelands", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/sound-generation-with-javascript-57b2fda65608", name: "Sound generation with Javascript", icon: "medium"}, {url: "https://medium.com/@soffritti.pierfrancesco/dynamic-reflections-in-three-js-2d46f3378fc4", name:"Dynamic reflections in Three.js", icon: "medium"}, {url: "http://devx.ddd.it/en/", name: "See all ddd experiments", icon: "external-link"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fnowherelands.png?alt=media&token=14a8210b-2468-4a8a-bed1-4d7d6e33cfba",
            highlight: false
        },
        {
            id: "BrokenMantra",
            name: "Broken Mantra",
            subtitle: "Demo-ish experiment hacked with Three.js",
            description: "A demo thing, built in one sleepless night.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/10.%20BrokenMantra/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/10.%20BrokenMantra", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fbrokenmantra.gif?alt=media&token=2e020b60-ddd2-489c-b5db-ea5d7de4c5c9",
            highlight: false
        },
        {
            id: "CollatzConjectureVisualization",
            name: "Collatz Conjecture",
            subtitle: "Math can be beautiful, at times",
            description: "Collatz Conjecture visualization, powered by the HTML5 canvas.<br/>Every drawing is generated in real-real time, refresh the page to generate a new shape.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/12.%20Collatz%20Conjecture/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/12.%20Collatz%20Conjecture", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://photos.app.goo.gl/udAm4xoUr6p87wms1", name: "Check out some images", icon: "photo"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fcollatz.jpg?alt=media&token=8528ecd9-9c1f-4d91-a6f1-322d0925297f",
            highlight: false
        },
        {
            id: "SoUNds",
            name: "SoUNds",
            subtitle: "Sound generation and visualization with Javascript",
            description: "Press the keys on your keyboard and start playing music. Every sound is generated in real-time through code.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/4.%20SoUNds/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/4.%20SoUNds", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/sound-generation-with-javascript-57b2fda65608", name: "Sound generation with Javascript", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fsounds.jpg?alt=media&token=f95cf4e0-0ebe-4abe-b2c3-3a6825818ffb",
            highlight: false
        },
        {
            id: "EyeBalls",
            name: "Eye Balls",
            subtitle: "Interactive WebGL experiment",
            description: "Move your mouse and let the eyes do their thing.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/9.%20EyeBall/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/9.%20EyeBall", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/glossy-spheres-in-three-js-bfd2785d4857", name:"Glossy spheres in Three.js", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Feyeballs.png?alt=media&token=90a107ce-98e7-4ded-a649-057ce7db0d0c",
            highlight: false
        },
        {
            id: "NeonCrystal",
            name: "NeonCrystal",
            subtitle: "Interactive WebGL experiment",
            description: "The result of some early hacking with Three.js.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/6.%20NeonCrystal/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/Doodling/tree/master/6.%20NeonCrystal", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://medium.com/@soffritti.pierfrancesco/dynamic-reflections-in-three-js-2d46f3378fc4", name:"Dynamic reflections in Three.js", icon: "medium"} ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fneoncrystal.png?alt=media&token=930c1840-7cfc-4983-8e55-e9398ad8c685",
            highlight: false
        },
        {
            id: "FloriDada",
            name: "FloriDada",
            subtitle: "Interactive WebGL experiment",
            description: "Fun project done in an evening, just to do some practise with Javascript and hack around with the HTML5 canvas and Web Audio API.<br/><br/>It's not very well built, it may not work with Safari and maybe other browsers D: use it with Chrome :)",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/Doodling/master/3.%20WTPlayer/index.html", name: "Open the experiment", icon: "external-link"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FfloriDada.png?alt=media&token=622c7cb3-3b4a-40d0-ad63-f33433fb61b3",
            highlight: false
        },
        {
            id: "HeightMapGenerator",
            name: "HeightMap Generator",
            subtitle: "Java heightmap generator based on Perlin Noise and Simplex Noise",
            description: "The app can send data through web socket to a Javascript application, that is capable of generating the 3D model of the heightmap.<br/><br/>The maps can be rendered and moved in real-time and with different visual effects.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/HeightMapGenerator", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ {url: "https://www.youtube.com/watch?v=CLzB6qL86qQ", name: "Simplex Noise video", icon: "youtube-play"}, {url: "https://www.youtube.com/watch?v=IBLfilm35xU", name:"Perlin Noise video", icon: "youtube-play"} ],
            labels: [ "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fheightmapgenerator.png?alt=media&token=a6735d97-9015-47f1-87b2-387703108e9f",
            highlight: false
        },
        {
            id: "TerrainGenerator",
            name: "Terrain Generator",
            description: "A very basic and hacky javascript terrain generator based on Perlin Noise and Three.js.<br/><br/>Heightmaps can be generated inside the web app or taken from an external source through web socket.",
            links: [ {url: "https://rawgit.com/PierfrancescoSoffritti/TerrainGenerator/master/index.html", name: "Open the experiment", icon: "external-link"}, {url: "https://github.com/PierfrancescoSoffritti/TerrainGenerator", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "web", "experiment" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2Fterraingenerator.png?alt=media&token=cf4195b0-3dd6-4b01-97bf-c683fdb4c19d",
            highlight: false
        },
        {
            id: "SlidingDrawer",
            name: "SlidingDrawer",
            subtitle: "Android custom View implementing the bottom sheet pattern",
            description: "I've built this library while I was working on Shuffly, no other open source library was good for my use case.<br/><br/>The substantial difference from all other implementations of the bottom sheet pattern is that in this case it's easy to position the slidable view relative to the non slidable views in the layout. In other implementations the only way to control the position of the slidable view, when collapsed, is by using a an offset. Here instead the slidable view is placed exactly below the non slidable view, just like in a vertical LinearLayout. The slidable view is conceptually part of the views hierarchy and not above it.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/SlidingDrawer", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "android", "library" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FSlidingDrawer.gif?alt=media&token=229574ee-872b-4411-9550-c656cf5b1de8",
            highlight: false
        },
        {
            id: "AndroidYouTubePlayer",
            name: "YouTubePlayer",
            subtitle: "An alternative YouTube player for Android",
            description: "I've built this library while I was working on Shuffly, as a replacement for the official YouTube player, that is extremely buggy and therefore impossible to use in production.<br/><br/>This YouTube player is based on a WebView and the web-based YouTube player, therefore in order to build it I had to break the wall between Java and Javascript and let the two world interoperate with each other. It's a simple View that can be easily integrated in every Activity/Fragment. Being based on the IFrame Player API, the YouTube app is not required in order to use the player.<br/><br/>I think that so far this is still the best YouTube player for Android available on the web.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/AndroidYouTubePlayer", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "android", "library" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FYouTubePlayer.png?alt=media&token=2c3809e0-79b1-432e-a551-1242216c3627",
            highlight: false
        },
        {
            id: "GoogleOAuth",
            name: "GoogleOAuth",
            subtitle: "WebView-based OAuth authentication library for Android",
            description: "I've built this library while I was working on Shuffly, in order to overcome a limitation of the Google authentication apis.<br/><br/>All of the authentication libraries for Android provided by Google suffer of the same problem: they don't allow access to secondary accounts (also called linked accounts) and force the user to always log into his main account. This is not a problem in most cases, but for some apps can be a huge limitation. For example: YouTube allows an account to have a main channel and multiple secondary channels. Some users may use regularly the secondary channels, so if you're building an app that lets them authenticate in their YouTube channel, you must provide the option to log into both the main channel and the secondary channels. Otherwise they won't use your app.<br/><br/>Apparently the only way to have this basic functionality is to use the web-based OAuth process. This library implements web-based OAuth as user friendly as possible, in order to solve the problem illustared above.",
            links: [ {url: "https://github.com/PierfrancescoSoffritti/GoogleWebOAuth", name: "Go to the code", icon: "github"} ],
            secondaryLinks: [ ],
            labels: [ "android", "library" ],
            img: "https://firebasestorage.googleapis.com/v0/b/personal-website-5dadd.appspot.com/o/projects%2FGoogleOAuth.jpg?alt=media&token=e41319c2-0739-496b-a0e1-c70f7b3ad335",
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