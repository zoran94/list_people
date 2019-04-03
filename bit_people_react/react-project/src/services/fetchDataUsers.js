import CreateUsers from "./../entities/User";
import URL_API_BASE from "./../shared/requests";
const userApi = `${URL_API_BASE}/?results=15`
const fetchData = () => {

    // if (localStorage.getItem('save')) {
    //     return Promise.resolve(
    //         JSON.parse(localStorage.getItem('save'))
    //     )
    // }

    return fetch(userApi)
        .then((users) => {
            return users.json()
        })
        .then((data) => {
            const displayUser = data.results.map(item => {
                const { name, picture, email, dob, gender, fullName } = item
                return new CreateUsers(name.first, name.last, picture.medium, email, dob.date, gender, fullName)
            })

            return displayUser;
        })
}



export {
    fetchData
}
