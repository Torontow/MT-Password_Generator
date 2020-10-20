// GENERATOR VARIABLES

//  generateBtn is the Generate Password button variable. It has an index of "generate".
var generateBtn = document.querySelector("#generate");
//  Makes the clicking the Generate Password button execute the _writePassword_ function
generateBtn.addEventListener("click", writePassword);

//  The user will choose some or all of these types of characters for their password.
var numString = ["0123456789"];
var lAlphaString = ["abcdefghijklmnopqrstuvqxyz"];
var uAlphaString = ["ABCDEFGHIJKLMNOPQRSTUVQXYZ"]
var specCharString = ["!#$%&()*+,-./:;<=>?@[^_`|~"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Write password to the #password input
  passwordText.value = password;
}

function generatePassword() {
  
  // Sets the length of the password (determined by user input)
  var pLength = prompt("Enter desired number of characters for password between 8 and 128.");

      // User chooses which types of characters will make up the password and assigns a boolean  
      var num = confirm("Numbers?");
      var lCase = confirm("Lowercase letters?");
      var uCase = confirm("Uppercase?");
      var specChar = confirm("Special Characters?");

      // Defines array of types of characters the user wants for their password.
      var pCharString = [];

      // Adds whichever types of characters users confirm for their password
      // and pushes them to a storage place
        
      switch (true) {
        case num:
          pCharString.push(numString);
        case lCase:
          pCharString.push(lAlphaString);
        case uCase:
          pCharString.push(uAlphaString);
        case specChar:
          pCharString.push(specCharString);
        break;
        default:
          alert("Must choose some characters for the password.")        
      }   

      // Combines all the character types chosen and creates a single string
      // which will be drawn from to create the password
      var pChars = pCharString.join("");

      // Creates an empty array to store final password text characters
      var passwordTextArray = [];

      // Chooses characters at random from the string of character types 
      // and adds them to the final password text array.
      for (var i=0; i<pLength; i++) {
        passwordTextArray.push(pChars[Math.floor(Math.random()*pChars.length)]);
      }
      // Returns the final array as a single string to the document
      return (passwordTextArray.join(""));
}




