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
  
  // Restricts users to choosing a password between 8 and 128 characters.
  var pLength = 0;
  while (pLength < 8 || pLength > 128) {
    pLength = prompt("Enter desired number of characters for password between 8 and 128.");
    }

      // User chooses which types of characters will make up the password and assigns a boolean  
      var num = confirm("Click OK to include integers.");
      var lCase = confirm("Click OK to include lowercase letters.");
      var uCase = confirm("Click OK to include uppercase letters.");
      var specChar = confirm("Click OK to include special characters.");

      // Defines array of types of characters the user wants for their password.
      var pCharString = [];

      // Adds whichever types of characters users confirm for their password
      // and pushes them to a storage place
      if (num) {
        pCharString.push(numString);
      }
      if (lCase) {
        pCharString.push(lAlphaString);
      }
      if (uCase) {
        pCharString.push(uAlphaString);
      }
      if (specChar) {
        pCharString.push(specCharString);
      } 
      
      // Validates that user chose at least one type of character to use.
      switch (pCharString.length) {
        case 0:
          alert("Error: No valid characters included.")
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




