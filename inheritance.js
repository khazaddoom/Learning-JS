
// var Person = function(name, age) {
//     this.name = name,
//     this.age = age
// }

// console.log(Person);

// // Person.sex = 'Male';

// // console.log(Person);

// var Ganesh = new Person('Ganesh', 31);

// // Person.prototype.salutation = function() {
// //     return 'Hello, I am ' + this.name + ' of Age ' + this.age ;
// // };

// // console.log(Ganesh.salutation());

// // var Reshma = new Person('Reshma', 28);

// Person.prototype.sex = 'Male';

// // Ganesh.sex = 'Male';

// console.log(Ganesh.sex);

// var Reshma = new Person('Reshma', 28);
// Reshma.sex = 'Female';

// console.log(Reshma.sex);
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

// var Person = function(name, yearOfBirth) {

//     this.name = name,
//     this.yearOfBirth = yearOfBirth;

// };

// var suvodip = new Person('Suvodip', 1988);

// var suvodipJudwa = suvodip;

// console.log(suvodipJudwa.yearOfBirth);

// suvodip.yearOfBirth = 1987;

// console.log(suvodipJudwa.yearOfBirth);


// function findPrimesInRange (x, y) {

//     for (let i = x; i <= y; i++) {

//         var divisionCount = 0;
        
//         for (let j = 1; j <=i; j++) {

//             if (i % j === 0) {
//                 divisionCount++;
//             }
//         }              
//         //console log if prime
//         (divisionCount <= 2)? console.log(i) : console.log(''); 
//     }

       
//     }

// findPrimesInRange(1, 5);


// function interviewQuestion(job) {

//     return function(name) {
//         if (job == 'designer') {
//             console.log(name + ', can you please explain what UX Design is?');           
//         } else if (job == 'teacher') {
//             console.log('What subject do you teach? ' + name );           
//         }
//     };

// }

// interviewQuestion('teacher')('John');
// interviewQuestion('designer')('Ganesh');

function testing() {
    return 
    'hello';
}

console.log(testing());