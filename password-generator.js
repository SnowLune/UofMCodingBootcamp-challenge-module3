// Assignment Code
var generateBtn = document.getElementById("generate");

var c_Special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var c_Lower = "abcdefghijklmnopqrstuvwxyz";
var c_Upper = c_Lower.toUpperCase();
var c_Number = "0123456789";

var msgLength = "Enter desired password length [8 - 128 characters]"
var msgLower = "Include lowercase letters (a-z)?"
var msgUpper = "Include uppercase letters (A-Z)?"
var msgNumber = "Include numbers (0-9)?"
var msgSpecial = "Include special characters (!@#$)?"

function generatePassword(passwordLength = 16, b_AlphaLower = true, 
         b_AlphaUpper = true, b_Numeric = true, b_Special = true)
{
   // very mild and useless error handling
   if (passwordLength <= 0)
   {
      console.error("How did this even happen?");
   }

   if (b_AlphaLower === false && b_AlphaUpper === false &&
            b_Numeric === false && b_Special === false)
   {
      console.error("No criteria set, using lowercase only");
      b_AlphaLower = true;
   }

   // Set characters we can use
   chars = "";
   if (b_AlphaLower === true)
   {
      chars = chars + c_Lower;
   }

   if (b_AlphaUpper === true)
   {
      chars = chars + c_Upper;
   }

   if (b_Numeric === true)
   {
      chars = chars + c_Number;
   }

   if (b_Special === true)
   {
      chars = chars + c_Special;
   }

   // Actually generate the password
   var newPassword = "";

   for (let i = 0; i < passwordLength; i++)
   {
      newPassword = newPassword 
               + chars[Math.floor(Math.random() * chars.length)]
   }

   return newPassword;
}

// Get password criteria using prompts
// 0 = length, 1 = lowercase, 2 = uppercase, 3 = number, 4 = special
function setCriteria(criteria)
{

   if (criteria === 0)
   {
      C = 0;
      while (C < 8 || C > 128)
      {
         C = Number(prompt(msgLength, 16));
      }
   }  
   else if (criteria === 1)
   {
      C = confirm(msgLower);
   }
   else if (criteria === 2)
   {
      C = confirm(msgUpper);
   }
   else if (criteria === 3)
   {
      C = confirm(msgNumber);
   }
   else if (criteria === 4)
   {
      C = confirm(msgSpecial);
   }
   else { console.error("not a valid criteria") }

   return C;
}

// Write password to the #password input
function writePassword()
{
   var password = generatePassword(
      setCriteria(0),
      setCriteria(1),
      setCriteria(2),
      setCriteria(3),
      setCriteria(4) 
   );
   var passwordText = document.getElementById("password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
