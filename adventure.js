//save the value the user types into the prompt to the variable name
let userName = prompt("Enter your name: ");

//alert - pop up message without the input field
alert("Hi, " + userName + "! Welcome to Final Destination, an adventure game where you pick your demise! Bwhahahaaa!!!... Lets begin, if you dare.");

console.log(userName)

//start with a prompt, use an if statement to show different messages based on what the user enters in the prompt]
let place = prompt("Do you wish to make an escape?(type 'car') OR Would you like to play?(type 'woods')").toLowerCase();

if(place === 'car'){
    alert('You approach the car, the keys are in ignition...SCORE!');
    let action = prompt("Do you start the car?(type 'start') OR Do you get out and walk?(type 'walk')").toLowerCase();
    if(action === 'start'){
        alert('You start the ignition and zoom off down the road. It\'s getting dark, your phone is dead... You hear a loud rattle sound, then SUDDENLY a Large Dark Figure appears in the middle of the road');
        let wonder = prompt("Do you hit the figure? (type 'roadkill') OR Do you swerve to avoid? (type 'swerve')").toLowerCase();
        if(wonder === 'roadkill'){
            alert('The Large Dark Figure fades and you collide head with an 18-wheeler... Final Destination')
        }
        else{
            alert('You swerve going off road smashing into a large tree! The car catches fire and there no escape... Final Destination')
        }
    }
    else if(action === 'walk'){
        alert('You head towards the woods, It\'s getting dark and your phone is dead. along your way, you find a briefcase.');
        let choose = prompt("Do you open the briefcase? (type 'open' OR Do you keep walking? (type 'continue)").toLowerCase();
        if(choose === 'open'){
            alert('You open the briefcase and find cash, a flash light, and a fully charged phone. SCORE! As you go to dial for help the phone starts to vibrate in your hand... It\'s an unknown number');
            let findWay = prompt("Do you answer the phone? (type 'answer') OR Do you send to voicemail and dial for help? (type 'voicemail')").toLowerCase();
            if(findWay === 'answer'){
                alert('A heavy voice illumiates from the other end. "Wise decision to answer the phone, I can lead you to safety but you must hurry. The demons are on your trail"...');
            }
        }
        else{
            alert('You send the call to voicemail and attempt to dial for help. The phone locks and you can no longer gain access. You feel a chill run down your spine and turn to see a Dark Large Figure moving swiftly towards you');
            let decision = prompt("Do you fight? (type'fight') OR Do you run? (type'run')").toLowerCase();
            if(decision === 'fight'){
                alert('The Dark Figure swings a large mallet, crushing your ribcage...Final Destination')
            }
            else{
                alert('You run as fast as you can deeper into the forest. The sounds of heavy breathing in your ears, your heart is pounding, you take one small peek to see the distance between you and the figure when you feel the weight of a large mallet go across your head...Final Destination')
            }
        }
    }
}
else if(place === 'woods'){
    alert('You find an old path cleared of braches and follow it to a cabin')
    let choice = prompt("Do you enter the cabin? (type 'enter') OR Do you keep walking? (type 'continue')").toLowerCase();
    if(choice === 'enter'){
        alert('You enter the cabin, when suddenly the door slams shut behind you. You pull at the door with all your might, to no avail. It\'s locked from the outside. Theres no escape... Final Destination')
    }
    else{
        alert("As you walk deeper into the woods, you realize it\'s eerily silent... your phone suddenly vibrates scaring you half to death. Upon answering you hear 'Hi, we've been trying to reach you about you're car's extended warrenty'... Final Destination")
    }
}
else {
    alert('Invalid answer choice')
}