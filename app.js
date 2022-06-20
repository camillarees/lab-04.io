function getColor (){
    let yourColor = prompt("What other color moodboards would you like to see on this website?");
    document.write(yourColor + " is a great color! Thanks for your input!");
}

getColor();

function getAnswer (){
    let doYouLike = prompt("Do you like cool colors?");
    if(doYouLike === "yes")
    document.write("Cool colors are better than warm colors.");
    else
    document.write("Hm, very interesting!");
}

getAnswer();

function getFavColor (){
let whatColor = prompt("What's your favorite color?");
if(whatColor === "blue")
document.write(whatColor + " is my favorite too!");
else
document.write("That's a nice color");
}

getFavColor();