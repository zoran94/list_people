import CreateUsers from "./../entities/User";
import URL_API_BASE from "./../shared/requests";
const userApi = `${URL_API_BASE}/?results=15`
const fetchData = () => {
    return fetch(userApi)
        .then((users) => {
            return users.json()
        })
        .then((data) => {
            console.log(data)
            const displayUser = data.results.map(item => {
                //console.log(item);
                const { name, picture, email, dob, gender } = item
                return new CreateUsers(name.first, name.last, picture.medium, email, dob.date, gender)
            })
            return displayUser;
        })

}



export {
    fetchData
}
