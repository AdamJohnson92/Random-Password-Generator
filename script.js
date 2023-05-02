// Assignment Code
var generateBtn = document.querySelector("#generate");
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "~", ",", ".", "<", ">", "/", "?", ";", ":", "{", "}", "[", "]", "|"];
var pullOptions = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var password = "";
    var lengthPrompt = window.prompt("How many characters do you want your password to contain?", "Type a number between 8 and 128.")
    if (!lengthPrompt){
    window.alert("Have a nice day.");
    }
    if (
      (lengthPrompt < 8) ||
      (lengthPrompt > 128))
      {window.alert("Password must be between 8 and 128 characters long.");
      return};
  
    var capitalConfirm = window.confirm("Do you want to include capital letters?")
      if (capitalConfirm) {pullOptions=pullOptions.concat(capitalLetters)}
    var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
      if (lowerConfirm) {pullOptions=pullOptions.concat(lowerLetters)}
    var numbersConfirm = window.confirm("Do you want to include numbers?");
      if (numbersConfirm) {pullOptions=pullOptions.concat(numbers)}
    var specialConfirm = window.confirm("Do you want to include special characters?");
      if (specialConfirm) {pullOptions=pullOptions.concat(specialCharacters)};
      
      
      for(let i = 0; i < lengthPrompt; i++) {
      var index = Math.floor(Math.random() * pullOptions.length);
      password = password + pullOptions[index];
      }
  console.log(password);
  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
