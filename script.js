// Assignment Code
var generateBtn = document.querySelector("#generate");

var c_Special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var c_Lower = "abcdefghijklmnopqrstuvwxyz";
var c_Upper = c_Lower.toUpperCase();
var c_Number = "0123456789";
var c_All = c_Special + c_Lower + c_Upper + c_Number;

function generatePassword(passwordLength = 16, b_Alpha = true, b_Numeric = true, b_Special = true)
{
   if (passwordLength <= 0)
   {
      console.error("How did this even happen?");
   }

   // Set characters we can use
   chars = c_Upper + c_Lower;
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

// Write password to the #password input
function writePassword()
{
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
