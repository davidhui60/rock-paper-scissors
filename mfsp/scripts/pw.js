function password(password) {
  var password = "please";
  var x = prompt("Enter in the password "," ");
  if (x.toLowerCase() == password) {
  alert("Come right in \n \n You've entered in the right password");
  window.location = "good.htm";
  }
  else {
  window.location = "bad.htm";
  }
}
