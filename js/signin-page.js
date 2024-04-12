function signingIn () {
  let username = document.getElementById ("username-input").value;
  let passwordOne = document.getElementById ("password-input-1").value;
  let passwordTwo = document.getElementById ("password-input-2").value;
  let phoneNumber = document.getElementById ("phone-input").value;

  let allFilled = false;

  if (!username) {
    wrongInfo(0);
    allFilled = false;
  }
  else {
    filledBox(0);
    allFilled = true;
  }
  
  if (!passwordOne) {
    wrongInfo(1);
    allFilled = false;
  }
  else {
    filledBox(1);
    allFilled = true;
  }

  if (!passwordTwo) {
    wrongInfo(2);
    allFilled = false;
  }
  else {
    filledBox(2);
    allFilled = true;
  }

  if (!phoneNumber) {
    wrongInfo(3);
    allFilled = false;
  }
  else {
    filledBox(3);
  }

  if (allFilled) {
    infoCheck();
  }
}

function wrongInfo (index) {
  let username = document.getElementById ("username-input");
  let passwordOne = document.getElementById ("password-input-1");
  let passwordTwo = document.getElementById ("password-input-2");
  let phoneNumber = document.getElementById ("phone-input");

  if (index == 0) {
    username.style.border = "solid rgb(219, 20, 46) 2px";
    username.style.backgroundColor = "rgba(219, 20, 46, 0.349)";
  }
  else if (index == 1) {
    passwordOne.style.border = "solid rgb(219, 20, 46) 2px";
    passwordOne.style.backgroundColor = "rgba(219, 20, 46, 0.349)";
  }
  else if (index == 2) {
    passwordTwo.style.border = "solid rgb(219, 20, 46) 2px";
    passwordTwo.style.backgroundColor = "rgba(219, 20, 46, 0.349)";
  }
  else if (index == 3) {
    phoneNumber.style.border = "solid rgb(219, 20, 46) 2px";
    phoneNumber.style.backgroundColor = "rgba(219, 20, 46, 0.349)";
  }
}

function filledBox (index) { //this function dehighlights filled inputs
  let username = document.getElementById ("username-input");
  let passwordOne = document.getElementById ("password-input-1");
  let passwordTwo = document.getElementById ("password-input-2");
  let phoneNumber = document.getElementById ("phone-input");

  if (index == 0) {
    username.style.border = "solid rgb(155, 155, 155) 2px";
    username.style.backgroundColor = "white";
  }
  else if (index == 1) {
    passwordOne.style.border = "solid rgb(155, 155, 155) 2px";
    passwordOne.style.backgroundColor = "white";
  }
  else if (index == 2) {
    passwordTwo.style.border = "solid rgb(155, 155, 155) 2px";
    passwordTwo.style.backgroundColor = "white";
  }
  else if (index == 3) {
    phoneNumber.style.border = "solid rgb(155, 155, 155) 2px";
    phoneNumber.style.backgroundColor = "white";
  }
}

function infoCheck () {
  let username = document.getElementById ("username-input").value;
  let passwordOne = document.getElementById ("password-input-1").value;
  let passwordTwo = document.getElementById ("password-input-2").value;
  let phoneNumber = document.getElementById ("phone-input").value;

  if (username == "111") {
    if (passwordOne == "111" && passwordTwo === passwordOne) {
      if (phoneNumber == "111") {
        window.open("../login-page.html", "_self");
      }
    }
  }
}