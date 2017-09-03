import img from "../assets/images/nowherelands.png";

export default {
    fetchBlogPosts: () => new Promise( (resolve, reject) => resolve( [
        {
            title: "One Calc",
            labels: [ "android", "vr" ],
            img: "https://raw.githubusercontent.com/PierfrancescoSoffritti/pierfrancescosoffritti.com/gh-pages/img/portfolio/blender.jpg",
            highlight: true
        } ] ) )
}