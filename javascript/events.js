// Declare function
function checkUsername () {
    // Get the element with id feedback
    var elMsg = document.getElementById('feedback');
    // If statment for if the username input is less than 5 characters
    if (this.value.length < 5) {
        // Set message if username is to short
        elMsg.textContent = 'Username must be 5 characters or more';
        // option for it being longer than 5 characters
    } else {
        elMsg.textContent = '';
    }
}

// placing element that we want to event to happen with in a variable
var elUsername = document.getElementById('username');
// set the event handler for that element and the type of handler wanted
 elUsername.onblur = checkUsername;

// This also does the same thing, however it allowinf for more than 1 function to be called

    /*
        var elUsername = document.getElementById('username');
        elUsername.addEventListener('blur', checkUsername, false);
   */

// Using parameters with event listeners
/*
var elMsg = document.getElementById('feedback');

function checkUsername2(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.textContent = 'Username must be ' + minLength + 'characters or more';
    } else {
        elMsg.textContent = '';
    }
}

// Check to make sure that addEventListener is accepted by the browser
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function() {
        checkUsername2(5);
    }, false);
} else {
    // not you do not include the event flow boolean when using the attachEvent method
    elUsername.attachEvent('onblur', function() {
        checkUsername2(5);
    });
}
*/