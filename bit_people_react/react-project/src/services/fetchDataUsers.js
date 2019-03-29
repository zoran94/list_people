import CreateUsers from "./../entities/User";

const fetchData = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then((users) => {
            return users.json()
        })
        .then((data) => {
            const displayUser = data.results.map(item => {
                //console.log(item);
                const { name, picture, email, dob } = item
                return new CreateUsers(name.first, name.last, picture.medium, email, dob.date)
            })
            return displayUser;
        })

}



export {
    fetchData
}
