//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    if(name === "Tyler") {
      return true;
    } else{
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName () {
  var name = prompt("What is your name?");
  return name;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome (name) {
  name = getName();
  alert("Welcome, " + name);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //argument is what is the actual value being used in the function the parameter is what is being passed in

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //0, null, undefined, flase, "", NaN
  //using boolean expersions


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName () {
    return "Wesley";
  }



//Now save the function definition of myName into a new variable called newMyName

  function newMyName() {
    return myName();
  }

//Now alert the result of invoking newMyName

  alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

 function outerFn () {
   return function () {
     return "Wesley";
   };
 }

//Now save the result of invoking outerFn into a variable called innerFn.

 // function innerFn () {
 //    return outerFn();
 //  }
  var innerFn = outerFn();

//Now invoke innerFn.

  innerFn();
