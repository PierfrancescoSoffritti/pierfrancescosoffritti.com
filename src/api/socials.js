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
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/pierfrancescosoffritti/en"
        },    
        {
            name: "stack-overflow",
            text: "",
            icon: "fab fa-stack-overflow",
            url: "https://stackoverflow.com/users/4306449/pierfrancesco-soffritti?tab=profile"
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
        },
        {
            name: "google-plus",
            text: "",
            icon: "fab fa-google-plus-g",
            url: "https://plus.google.com/u/0/+PierfrancescoSoffritti2/"
        },      
    ] ) )
}