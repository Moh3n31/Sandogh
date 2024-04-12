function visibility () { //this function makes the password visible
  let input = document.getElementById ("password-input");
  let icon = document.getElementById ("button-icon");

  if(input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
    icon.setAttribute("src", "icons/visibility-off.png");
  }
  else {
    input.setAttribute("type", "password");
    icon.setAttribute("src", "icons/visibility.png");
  }
}

function loggingIn () { //checks if informations are correct and then logs in
  let password = document.getElementById ("password-input").value;
  let username = document.getElementById ("username-input").value;

  if (!password & !username) {
    wrongInfo(0);
  }
  else if(!password){
    wrongInfo(1);
    filledBox (2);
  }
  else if(!username){
    wrongInfo(2);
    filledBox(1);
  }
  else {
    filledBox(0);
    infoCheck();
  }

}

function wrongInfo (index) { //this function highlights empty inputs
  let password = document.getElementById ("password-input");
  let button = document.getElementById ("visibility-button");
  let username = document.getElementById ("username-input");

  if (index == 0) {
    password.style.border = "solid rgb(219, 20, 46) 2px";
    password.style.backgroundColor = "rgba(219, 20, 46, 0.349)";

    button.style.border = "solid rgb(219, 20, 46) 2px";

    username.style.border = "solid rgb(219, 20, 46) 2px";
    username.style.backgroundColor = "rgba(219, 20, 46, 0.349)";
  }
  else if (index == 1) {
    password.style.border = "solid rgb(219, 20, 46) 2px";
    password.style.backgroundColor = "rgba(219, 20, 46, 0.349)";

    button.style.border = "solid rgb(219, 20, 46) 2px";
  }
  else if (index == 2) {
    username.style.border = "solid rgb(219, 20, 46) 2px";
    username.style.backgroundColor = "rgba(219, 20, 46, 0.349)";
  }
}

function filledBox (index) { //this function dehighlights filled inputs
  let password = document.getElementById ("password-input");
  let button = document.getElementById ("visibility-button");
  let username = document.getElementById ("username-input");

  if (index == 0) {
    password.style.border = "solid rgb(155, 155, 155) 2px";
    password.style.backgroundColor = "white";

    button.style.border = "solid rgb(153, 6, 153) 2px";

    username.style.border = "solid rgb(155, 155, 155) 2px";
    username.style.backgroundColor = "white";
  }
  else if (index == 1) {
    password.style.border = "solid rgb(155, 155, 155) 2px";
    password.style.backgroundColor = "white";

    button.style.border = "solid rgb(153, 6, 153) 1px";
  }
  else if (index == 2) {
    username.style.border = "solid rgb(155, 155, 155) 2px";
    username.style.backgroundColor = "white";
  }
}

function infoCheck () {
  let password = document.getElementById ("password-input").value;
  let username = document.getElementById ("username-input").value;
  let error = document.getElementById ("login-error");

  //TODO: I'll need an actual algorythem
  if (username == "111" && password == "111") {
    window.open("../main-page.html");
  }
  else {
    error.style.display = "block";
    wrongInfo(0);
  }
}

/*
TODO: add something here!
! there's something wrong 
? is this ok?
* don't froget this!
// wrong code!
*/