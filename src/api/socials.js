export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {   
            name: "email",
            text: "soffritti.pierfrancesco@gmail.com",
            icon: "envelope"
        },
        {
            name: "instagram",
            text: "",
            icon: "instagram"
        },
        {
            name: "facebook",
            text: "",
            icon: "facebook"
        },
        {
            name: "google-plus",
            text: "",
            icon: "google-plus"
        },
        {
            name: "github",
            text: "",
            icon: "github"
        },
        {
            name: "medium",
            text: "",
            icon: "medium"
        }, 
        {
            name: "linkedin",
            text: "",
            icon: "linkedin"
        },    
        {
            name: "stack-overflow",
            text: "",
            icon: "stack-overflow"
        },       
    ] ) )
}