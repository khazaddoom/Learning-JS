// var name = 'Ganesh', age = 31, isMarried = false;

// console.log(name + "/" + age + "/" + isMarried);

// console.log(age + age + isMarried);

// var person = {
//     dateOfBirth: new Date(),
//     calculateAge: function(){

//         if (this.yearOfBirth != null) {
//             return 2018 - this.yearOfBirth;
//         }
//         else  {
//             return 'Something went wrong!';
//         } 

//     }
// }
// person.dateOfBirth = new Date(1986, 12, 31);
// console.log(person.dateOfBirth.toUTCString());
// var hello = function()  {

//     if (true) {

//         var name = 'Ganesh';
        
//     }

// }


// console.log(name);


// var a = 100;
// first();
// function first() {
    
//     var b = 200;
//     second();
//     console.log('from first : ' + (a + b));

//     function second() {
      
//         var c = 300;
//         third();
//         console.log('from second : ' + (a + b + c));
//         function third() {
//             var d = 400;
//             console.log('from third : ' + (a + b + c + d));
            
//         }
//     }
// }

// var a = 100;
// first();
// function first() {
//     console.log('from first func: ' + a);
//     second();
// }

// function second() {
//     console.log('from second func: ' + a);
//     console.log('hello from second');
// }

// //lexical scoping

// first();
// var a = 500;


// function first() {

//     console.log(a);
//     third();

// }


// function second() {

//     console.log(a);

    
//     function third() {

//         console.log(a);

//     }

// }


// //this keywords refers to the object that calls that function
// //1. this keyword inside a regular function call gets the reference of 
// //window object no matter where it is called

// var person = {
//     name: 'Ganesh',
//     yearOfBirth : 1986,
//     calculateAge: function() {
//         console.log(2018 - this.yearOfBirth);
//         innerFunction();
//         function innerFunction() {
//             console.log(this);
//         }

//     }    
// };

// person.calculateAge();


// var reshma = {

//     name: 'Reshma',
//     sex: 'female',
//     age: 28,
//     job: 'bank officer',
//     maritalstatus: 'single',
//     presentation: function() {
//         console.log('Hello I am ' + this.name + ', ' + this.age + ' years old ' + this.sex + ' working as a ' + this.job);
//     },
//     isMarried : function() {
//         if(this.maritalstatus === 'single') 
//             console.log('False');
//         else if(this.maritalstatus === 'married') 
//             console.log('True');
//     }

// }

// var Ganesh = {
//     name: 'Ganesh',
//     sex: 'Male',
//     age: 31,
//     job: 'Mendix Architect',
//     maritalstatus: 'married',
// }

// reshma.isMarried.call(Ganesh);


var Person = {

    name: 'Ganesh',
    yearOfBirth: 1986

}

Person.calculateAge = function() {
    return 2018 - this.yearOfBirth;
}


console.log(Person.calculateAge());
