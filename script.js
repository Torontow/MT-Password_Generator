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

  var passwordTextArray = [];
  
  // PARAMETERS FOR PASSWORD

  // Sets the length of the password (determined by user input)
  var pLength = prompt("Enter desired number of characters for password between 8 and 128.");
    

      // User chooses which types of characters will make up the password and assigns a boolean  
      var num = confirm("Numbers?");
      var lCase = confirm("Lowercase letters?");
      var uCase = confirm("Uppercase?");
      var specChar = confirm("Special Characters?");
      var pCharString = [];
      // Adds whichever strings of characters users desire in their password
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
    
    var pChars = pCharString.join("");
  
// This finds a random character from the string of chosen password characters
// and adds it to the password text array.
for (var i=0; i<pLength; i++) {
  passwordTextArray.push(pChars[Math.floor(Math.random()*pChars.length)]);
}

return (passwordTextArray.join(""));

}




