export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {   
            name: "email",
            text: "soffritti.pierfrancesco@gmail.com",
            icon: "fas fa-envelope",
            url: "mailto:soffritti.pierfrancesco@gmail.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/PierfrancescoSoffritti"
        },
        {
            name: "medium",
            text: "",
            icon: "fab fa-medium-m",
            url: "https://medium.com/@soffritti.pierfrancesco"
        }, 
        {
            name: "twitter",
            text: "",
            icon: "fab fa-twitter",
            url: "https://twitter.com/psoffritti"
        }, 
        {
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/pierfrancescosoffritti/en"
        }, 
        {
            name: "instagram",
            text: "",
            icon: "fab fa-instagram",
            url: "https://instagram.com/pierfrancesco.soffritti/"
        },
        {
            name: "facebook",
            text: "",
            icon: "fab fa-facebook-f",
            url: "https://www.facebook.com/pierfrancesco.soffritti"
        }      
    ] ) )
}