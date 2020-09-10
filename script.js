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



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
}
