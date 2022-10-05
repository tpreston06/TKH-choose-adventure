//save the value the user types into the prompt to the variable name
let userName = prompt("Enter your name: ");

//alert - pop up message without the input field
alert("Hi, " + userName + "! Welcome to Final Destination, an adventure game where you pick your demise! Bwhahahaaa!!!... Lets begin, if you dare.")

console.log(userName)

//start with a prompt, use an if statement to show different messages based on what the user enters in the prompt]
let place = prompt("Do you wish to make an escape?(type 'car') OR Would you like to play?(type'woods')");

if(place === 'car'){
    alert('You approach the car, the keys are in ignition...SCORE!')
    let action = prompt("Do you start the car?(type 'start') OR Do you get out and walk?(type'walk')")
}