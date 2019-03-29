
class CreateUsers {
    constructor(name, lastName, picture, email, date) {
        this.name = name
        this.lastName = lastName
        this.picture = picture
        this.email = email
        this.date = new Date().toLocaleDateString();

    }
    getFullDate() { }

}

export default CreateUsers;