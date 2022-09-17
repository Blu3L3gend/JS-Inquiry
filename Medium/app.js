//Shouting and Talking alerts

var input = prompt("Say Banana");
if (input == input.toUpperCase()) {
  alert("You're extremely loud, Quiet Down");
} else if (input == input.toLowerCase()) {
  alert("Whispering like a ghost, talk louder");
} else {
  alert("You're now talking normally");
}
