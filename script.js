// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "~", ",", ".", "<", ">", "/", "?", ";", ":", "{", "}", "[", "]", "|"];
  var generatePassword = function(){
    for(var i = 0; i < lengthPrompt; i++) {
      capitalLetters[Math.floor(Math.random() * capitalLetters.length)]}
    };
  var lengthPrompt = window.prompt("How many characters do you want your password to contain?", "Type a number between 8 and 128.")
  if (!lengthPrompt) {
    window.alert("Have a nice day.");
  }
    if (
      (lengthPrompt < 8) ||
      (lengthPrompt > 128))
      {window.alert("Password must be between 8 and 128 characters long.");
      return};
  var capitalConfirm = window.confirm("Do you want to include capital letters?")
  if (capitalConfirm) {
    capitalLetters;
    return generatePassword();
  }
  //var lowerConfirm = window.confirm("Do you want to include lowercase letters?");
  //var numberConfirm = window.confirm("Do you want to include numbers?");
  //var specialConfirm = window.confirm("Do you want to include special characters?");
  
  var generatePassword = function()
   {
    capitalLetters[Math.floor(Math.random() * capitalLetters.length)]}

  
  password = generatePassword()
  passwordText.value = password


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
