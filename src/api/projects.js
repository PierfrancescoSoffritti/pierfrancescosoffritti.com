export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            labels: [ "android", "vr" ]
        },
        {
            labels: [ "android", "web experiment", "web dev" ]
        } ] ) )
}