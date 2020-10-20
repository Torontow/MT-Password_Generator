// Makes the "Generate Password" button execute writePassword() when clicked.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Stores the character sets user will choose from to build the password.  
var numString = ["0123456789"];
var lAlphaString = ["abcdefghijklmnopqrstuvqxyz"];
var uAlphaString = ["ABCDEFGHIJKLMNOPQRSTUVQXYZ"]
var specCharString = ["!#$%&()*+,-./:;<=>?@[^_`|~"];


// Replaces "Your Secure Password" in document with user-defined password.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // Write password to the #password input field
    passwordText.value = password;
}

// Creates password with criteria defined by user for use in writePassword().
function generatePassword() {  
    // Restricts users to choosing a length between 8 and 128 characters.
    var pLength = 0;
    while (pLength < 8 || pLength > 128) {
      pLength = prompt("Enter desired number of characters for password between 8 and 128.");
    }

    // User chooses which character sets to include in password. 
    var num = confirm("Click OK to include integers (0 through 9).");
    var lCase = confirm("Click OK to include lowercase letters.");
    var uCase = confirm("Click OK to include UPPERCASE letters.");
    var specChar = confirm("Click OK to include special characters (!@#$, etc.)");

    // Builds the array that contains the user-selected character sets.
    var pCharString = [];
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
    
    // Validates that user chose at least one character set to use.
    switch (pCharString.length) {
      case 0:
        alert("Error: No characters were selected to include in your password. Please try again.")
    }       
    
    // Combines chosen character sets to create a single string
    // of allowable password characters.
    var pChars = pCharString.join("");

    // Defines an array to store password text characters.
    var passwordTextArray = [];

    // Selects the final password characters and 
    // stores them in the passwordTextArray array.
    for (var i=0; i<pLength; i++) {
      passwordTextArray.push(pChars[Math.floor(Math.random()*pChars.length)]);
    }
    // Returns the passwordTextArray as a single string to writePassword().  
    return (passwordTextArray.join(""));
}




