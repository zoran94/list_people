
class CreateUsers {
    constructor(name, lastName, picture, email, date, gender) {
        this.name = name
        this.lastName = lastName
        this.picture = picture
        this.email = email
        this.date = new Date(date).toLocaleDateString();
        this.gender = gender;
        this.fullName = `${this.name} ${this.lastName}`

    }
   

    // toUpper(){
    //     const name = this.name.split(" ")[0].toUpperCase().slice(1).toLowerCase();
    //     const lastName = this.lastName.split(" ")[0].toUpperCase().slice(1).toLowerCase();
    //     return `${name} ${lastName}`
    // }

}

export default CreateUsers;