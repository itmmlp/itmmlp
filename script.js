function validateForm() {
  var name = document.forms[0]["name"].value;
  var email = document.forms[0]["email"].value;
  var subject = document.forms[0]["subject"].value;
  var message = document.forms[0]["message"].value;
  var errorMessage = document.getElementById("error-message");

  if (name === "" || email === "" || subject === "" || message === "") {
    errorMessage.textContent = "All fields are required.";
    return false;
  } else {
    errorMessage.textContent = "";
    return true;
  }
}
