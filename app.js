
let username = prompt("Create a Username")
document.write("Hello " + username)
if (username === "") {
alert("No value was entered. Please try again.")
return false;
}

function getFavColor (){
let whatColor = prompt("What's your favorite color?");
if(whatColor === "blue")
document.write(whatColor + " is my favorite too!");
else
document.write("That's a nice color");

getFavColor();
}

function getAnswer (){
let moodboardColor = prompt("What color do you want to see on this moodboard?");
if(moodboardColor === "")
document.write(moodboardColor + " is a great color! Thanks for your input.");
    
getAnswer();
}