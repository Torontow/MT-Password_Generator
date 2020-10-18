// Generator Variables

var generateBtn = document.querySelector("#generate");
// The user will choose some or all of these types of characters for their password.
var numString = ["0123456789"];
var alphaString = ["abcdefghijklmnopqrstuvqxyz"];
var specCharString = ["!#$%&()*+,-./:;<=>?@[^_`{|}~"];
// User chooses type(s) of characters for their password;
// those characters will be stored in _pCharString_.
var pCharString = []; 
// The function will choose _pLength_ characters at random from pCharString,
// then push them to passwordText.
var passwordText = []; 

var pLength = prompt("Choose a number of characters (between 8 and 128).");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 

 
    

    }
  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);