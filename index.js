const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passlength = 8
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generateCharacter() {
    let character = Math.floor(Math.random() * characters.length)
    return characters[character]
}

function generatePassword() {
    passOne.textContent = ""
    passTwo.textContent = ""
    for (let i = 0; i < 8; i++){
        passOne.textContent += generateCharacter()
    }
    for (let i = 0; i < 8; i++){
        passTwo.textContent += generateCharacter()
    }
}

