function generate(){
    let wordbank = ["test", "hello", "application", "world", "fun", "apple", "banana","watermelon","handphone"]

    let random = Math.floor(Math.random() * (wordbank.length -1 - 0 + 1)) + 0;
    let word = wordbank[random]
    let masked_word = ""
    for(char of word){
        let prob = Math.random()
        if (prob > 0.5){
            masked_word += char
        }
        else{
            masked_word += "-"
        }
    }
    document.getElementById("thing").setAttribute("placeholder", masked_word)
    document.getElementById("thing").setAttribute("name", word)
}


function check(letter){
    let word = document.getElementById("thing").getAttribute("name")
    let placeholder = document.getElementById("thing").getAttribute("placeholder")
    if(word == ""){
        alert("Please click the buttton 'choose a word' to start")
    }
    else{
        let correct = false
    let new_word = ""
    let counter = 0
    for(char of placeholder){
        // if(placeholder.includes(char)){
        //     new_word += char
        // }
        // if(char == letter){
        //     new_word += char
        //     correct = true
        // }
        // else{
        //     new_word += "-"
        // }
        if(char != "-"){
            new_word += char
            counter += 1
        }
        else{
            if(word[counter] == letter){
                new_word += letter
                counter += 1
                correct = true
            }
            else{
                new_word += "-"
                counter += 1
            }
        }

    }
    document.getElementById("thing").setAttribute("placeholder", new_word)
    if(correct){
        alert("You guessed a right letter")
        guessed(new_word)
    }
    else{
        live_minus()
    }
    }
    

    
}

function guessed(word){
    if(!word.includes("-")){
        alert("You Win!")
    }
}

function live_minus(){
    let lives = document.getElementById("lives").innerText
    lives -= 1
    if(lives == 0){
        alert("You have 0 lives left. You lose!")
        document.getElementById("thing").setAttribute("placeholder","")
    }
    else{
        alert(`You have ${lives} lives left`)
        document.getElementById("lives").innerText = lives
    }
}



