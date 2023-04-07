// Assignment Code
// 1. Prompt the user for the password criteria
//   a. paswwrod lenght 8 <128
//.  b. Lowercase, Uppercase, special charectors 
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page
// These are the variables created to specify the password's charectors: numbers, Lowercase, Uppercase, Special Charectors, and the total length)
var generateBtn = document.querySelector("#generate");
var passwordLength = 8
var chars = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxwz0123456789~!@#$%^&*()_+=-~{}[]<>,.?/'
  
// Function to create the prompt messages asking the user to select the charectros and length for the password's acceptnce criteria.
 function generatePassword() {
  var passwordLength = prompt('choose the length of password between 8-125 charectors');
  var upperCase = confirm('Do you want capital letters?');
  var lowerCase = confirm('Do you want lower case letters?');
  var specialChars = confirm('Do you want special characters?');

  console.log(passwordLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(specialChars);

  var password = ''
  
  // for loop for the password to be created acording to the criterias 
  for(var i =0; i <= passwordLength; i ++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
   return password // return value stops the execution of a fucntion and returns the value
 } 
  
// Add event listener to generate button

// Write password to the #password input
// Funcrion created to generate the pasword 
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
 
}
generateBtn.addEventListener("click", writePassword); // This creates even when clicking on the "Generate Passwrod" button it will write the passwrod on textbox (#password)
  
  
