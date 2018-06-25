
var Person = function(name, age) {
    this.name = name,
    this.age = age;
}

console.log(Person);

// Person.sex = 'Male';

// console.log(Person);

var Ganesh = new Person('Ganesh', 31);

Person.prototype.salutation = function() {
    return 'Hello, I am ' + this.name + ' of Age ' + this.age ;
};

console.log(Ganesh.salutation());

var Reshma = new Person('Reshma', 28);

console.log(Person);



// var Risk = function (insuredName, inceptionYear, quotingCurrency) {
//     this.insuredName = insuredName,
//     this.inceptionYear = inceptionYear,
//     this.quotingCurrency = quotingCurrency,
//     allowRenewal = false,
//     this.renewable = function() {
//         allowRenewal === false? return 'Renewable' :  return 'Not Renewable' ;
//     }
// }

// var subex = new Risk('Subex Azure', 2018, 'USD');

// console.log(subex.renewable());