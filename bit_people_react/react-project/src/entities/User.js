
class CreateUsers {
    constructor(name, lastName, picture, email, date, gender) {
        this.name = name
        this.lastName = lastName
        this.picture = picture
        this.email = email
        this.date = new Date(date).toLocaleDateString();
        this.gender = gender;

    }
    getFullDate() { }

}

export default CreateUsers;