export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {   
            name: "email",
            text: "soffritti.pierfrancesco@gmail.com",
            icon: "envelope",
            url: "mailto:soffritti.pierfrancesco@gmail.com"
        },
        {
            name: "github",
            text: "",
            icon: "github",
            url: "https://github.com/PierfrancescoSoffritti"
        },
        {
            name: "medium",
            text: "",
            icon: "medium",
            url: "https://medium.com/@soffritti.pierfrancesco"
        }, 
        {
            name: "linkedin",
            text: "",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/pierfrancescosoffritti/en"
        },    
        {
            name: "stack-overflow",
            text: "",
            icon: "stack-overflow",
            url: "https://stackoverflow.com/users/4306449/pierfrancesco-soffritti?tab=profile"
        }, 
        {
            name: "instagram",
            text: "",
            icon: "instagram",
            url: "https://instagram.com/pierfrancesco.soffritti/"
        },
        {
            name: "facebook",
            text: "",
            icon: "facebook",
            url: "https://www.facebook.com/pierfrancesco.soffritti"
        },
        {
            name: "google-plus",
            text: "",
            icon: "google-plus",
            url: "https://plus.google.com/u/0/+PierfrancescoSoffritti2/"
        },      
    ] ) )
}