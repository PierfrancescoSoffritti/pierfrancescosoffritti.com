export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            name: "One Calc",
            labels: [ "android", "vr" ],
            img: "https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        },
        {
            name: "Shuffly",
            labels: [ "android", "web experiment", "web dev" ],
            img: "https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        } ] ) )
}