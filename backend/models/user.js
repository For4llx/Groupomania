class User
{
    constructor (lastName, firstName, email, hash)
    {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.password = hash;
    }
}

module.exports = User;