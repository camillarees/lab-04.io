function welcome(username){
   console.log("Hello " + username "!");
}

let username = prompt("Create a Username")
document.write("Hello " + username "!")
if (username == "") {
error = ("No value was entered. Please try again.")
alert(error);
return false;
}


function getFavColor (){
let whatColor = prompt("What's your favorite color?");
if(whatColor === "blue")
document.write(whatColor + " is my favorite too!");
else
document.write("That's a nice color");
}

getFavColor();