// User variables

var enter;

var checkNumber;

var checkCharacter;

var checkUppercase;

var checklowercase;

// Password variable

// special characters 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// letters

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//function to convert to uppercase if user choises to

var toUpper = function (x) {
  return x.toUpperCase();
}

//making variable for convertion 
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps= generatePassword();
  document.getElementById("password").parentElement;placeholder = ps;
});

//fuctions for generator

function generatePassword() {
  
  enter = parseInt(prompt("Choose between 8 and 128 characters"));
  
  // First alert 
  
  if (!enter) {
      
    alert("needs a value");
  
  } else if (enter < 8 || enter > 128) {
     
    // confirms user input
      
    enter = parseInt(prompt("must be between 8 and 128"));

  } else {
     
    //when user input is confirmed 
     
      checkNumber = confirm("Do you want the password to contain numbers?");
      checkCharacter = confirm("Do you want the password to contain special characters?");
      checkUppercase = confirm("Do you want the password to contain Uppercase letters?");
      checklowercase = confirm("Do you want the password to contain Lowercase letters?");
  };

  // Else if user returns negiative 
  
  if (!checkCharacter && !checkNumber && !checkUppercase && !checklowercase) {
      choices = alert("You must choose!");

  }
  
  // Else if for 4 oks
 
  else if (checkCharacter && checkNumber && checkUppercase && checklowercase) {

      choices = character.concat(number, letters, letters2);
  }
  
  // Else if for 3 oks
  
  else if (checkCharacter && checkNumber && checkUppercase) {
      choices = character.concat(number, letters2);
  }
  
  else if (checkCharacter && checkNumber && checklowercase) {
      choices = character.concat(number, letters);
  }
  
  else if (checkCharacter && checklowercase && checkUppercase) {
      choices = character.concat(letters, letters2);
  }
  
  else if (checkNumber && checklowercase && checkUppercase) {
      choices = number.concat(letters, letters2);
  }
  
  // Else if for 2 oks
  else if (checkCharacter && checkNumber) {
      choices = character.concat(number);

  
  } else if (checkCharacter && checklowercase) {
      choices = character.concat(letters);

  
  } else if (checkCharacter && checkUppercase) {
      choices = character.concat(letters2);
  
  }
  
  else if (checklowercase && checkNumber) {
      choices = letters.concat(number);

  
  } else if (checklowercase && checkUppercase) {
      choices = letters.concat(letters2);

  
  } else if (checkNumber && checkUppercase) {
      choices = number.concat(letters2);
  
  }
  // Else if for ok
  
  else if (checkCharacter) {
      choices = character;
  }
  
  else if (checkNumber) {
      choices = number;
  }
  
  else if (checklowercase) {
      choices = letters;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var password = [];

// Starts pssword generation 

for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
// adds the password array then makes it a string

var ps = password.join("");
UserInput(ps);
return ps;
}

// should put the text in the box 

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

};
