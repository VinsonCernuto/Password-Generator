// User variables

var enter;

var confirmNumber;

var confirmCharacter;

var confirmUppercase;

var confirmLowercase;

// Password variable

// characters 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabet

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//function to convert to uppercase if user choises to

var toUpper = function (x) {
  return x.toUpperCase();
}

//making variable for convertion 
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps= generatePassword();
  document.getElementById("password").parentElement;placeholder = ps;
});



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

