
function createUsername (){   
    let username = prompt("Create a Username")
    document.write("Hello " + username)
    if (username === "") {
    alert("No value was entered. Please try again.")
    return false;
    }
}

createUsername();

function getFavColor (){
    let color = "blue";
    while (whatColor !== color) {
        let whatColor = prompt("What's your favorite color?").toLowerCase();
    }
    document.write(whatColor + " is my favorite too!");

}

getFavColor();

function getAnswer (){
    let moodboardColor = prompt("What color do you want to see on this moodboard?").toLowerCase();
    document.write(moodboardColor + " is a great color! Thanks for your input.");
    
}

getAnswer();

function sunsetPictures() {
    let pictures = prompt("How many sunset pictures do you want?");
    for (let i = 1; i <= pictures; i++) {
        document.write(<p><img src="./img_sunset.jpg" alt="sunset"></p>)
    }
    
}

sunsetPictures();

