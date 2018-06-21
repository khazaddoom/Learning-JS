// var name = 'Ganesh', age = 31, isMarried = false;

// console.log(name + "/" + age + "/" + isMarried);

// console.log(age + age + isMarried);

var person = {
    dateOfBirth: new Date(),
    calculateAge: function(){

        if (this.yearOfBirth != null) {
            return 2018 - this.yearOfBirth;
        }
        else  {
            return 'Something went wrong!';
        } 

    }
}
person.dateOfBirth = new Date(1986, 12, 31);
console.log(person.dateOfBirth.toUTCString());
