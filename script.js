// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatedPassword() {
  var numberOfChars = ["two"]
}


generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = parseInt(prompt("Enter the length of the password (no more than 128 characters):"));

  while (isNaN(length) || length > 128 || length <= 0) {
    length = parseInt(prompt("Please enter a valid length for the password (no more than 128 characters):"));
  }

  var includeUppercase = confirm("Include uppercase characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
  var includeNumbers = true;

  while (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
    alert("You must select at least one character type.");
    includeUppercase = confirm("Include uppercase characters?");
    includeLowercase = confirm("Include lowercase characters?");
    includeNumbers = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
    var includeNumbers = true;
  }

  var allChars = "";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (includeUppercase) {
    allChars += uppercaseChars;
  }

  if (includeLowercase) {
    allChars += lowercaseChars;
  }

  if (includeNumbers) {
    allChars += numericChars;
  }

  if (includeSpecial) {
    allChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
