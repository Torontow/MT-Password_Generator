// GENERATOR VARIABLES

// generateBtn is the Generate Password button variable. It has an index of "generate".
var generateBtn = document.querySelector("#generate");
// Makes the clicking the Generate Password button execute the _writePassword_ function
generateBtn.addEventListener("click", writePassword);

// The user will choose some or all of these types of characters for their password.
var numString = ["0123456789"];
var alphaString = ["abcdefghijklmnopqrstuvqxyz"];
var specCharString = ["!#$%&()*+,-./:;<=>?@[^_`|~"];

// User chooses type(s) of characters for their password;
// those characters will be stored in _pCharString_.
var pCharString = []; 
// The function will choose _pLength_ characters at random from pCharString,
// then push them to passwordText.
var passwordText = []; 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Write password to the #password input
  passwordText.value = password;
}

function generatePassword() {

  // PARAMETERS FOR PASSWORD

  // sets the length of the password (determined by user input)
  var pLength = prompt("Choose a number of characters (between 8 and 128).");
  console.log(pLength);
  // THIS SECTION WORKS: Decides which types of characters will make up the password and assigns a boolean  
  var num = confirm("Numbers?");
  var lCase = confirm("Lowercase letters?");
  var uCase = confirm("Uppercase?");
  var specChar = confirm("Special Characters?");
  // 


}




