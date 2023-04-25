// Check the toggle checkbox
var toggle = document.querySelector("#show-passwords");

// Listen for click events on the toggle
toggle.addEventListener(
  "click",
  function (event) {
    // Get the password field
    var password = document.querySelector("#current-password");

    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (toggle.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  },
  false
);
toggle.addEventListener(
  "click",
  function (event) {
    // Get the password field
    var password = document.querySelector("#new-password");

    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (toggle.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  },
  false
);

// Loop through each password field
//  passwords.forEach(function (password) {

// If the toggle is checked, change the type to "text"
// Otherwise, change it back to "password"
//  if (toggle.checked) {
//  password.type = 'text';
// } else {
//  password.type = 'password';
// }

// });

//  }, false);

//   // Get the password field and toggle checkbox
//   var toggle = document.querySelector("#show-passwords");
//   var currentPW = document.querySelector("#current-password");
//   var newPW = document.querySelector("#new-password");

//   // Listen for click events on the toggle
//   toggle.addEventListener(
//     "click",
//     function (event) {
//       // If the toggle is checked, change the type to "text"
//       // Otherwise, change it back to "password"
//       if (toggle.checked) {
//         currentPW.type = "text";
//         newPW.type = "text";
//       } else {
//         currentPW.type = "password";
//         newPW.type = "password";
//       }
//     },
//     false
//   );

// Your code goes here...
// function myFunction() {
//   var x = document.getElementById("password");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }

//or

// Get the password field and toggle checkbox
var password = document.querySelector("#password");
var toggle = document.querySelector("#show-password");

// Listen for click events on the toggle
toggle.addEventListener(
  "click",
  function (event) {
    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (toggle.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  },
  false
);
