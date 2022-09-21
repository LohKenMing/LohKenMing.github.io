function generate_images(){
    let count = 0
    let selected = []
    let instruments = ["clarinet", "trumpet", "frenchhorn", "flute"]
    let string = ""

    let is_clarinet = false
    while(count < 3 || is_clarinet == false){
        let random = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        let instrument = instruments[random]
        if(count == 2 && is_clarinet == false){
            if(instrument == "clarinet"){
                selected.push(instrument)
                count += 1
                is_clarinet = true
            }
        }
        else{
            if(!selected.includes(instrument)){
                selected.push(instrument)
                if(instrument == "clarinet"){
                    is_clarinet = true
                    
                }
                count += 1
            }
           
        }
    }


    for(thing of selected){
        string += ` <div class="col-md-3 mb-3">
        <img src="game_images/${thing}.jpeg" style = 'height:200px;width:200px' alt="" id = '${thing}' class = 'instrument'>
      </div>`
    }

    document.getElementById("clarinet_game").innerHTML = string

    const images = document.getElementsByClassName("instrument");

    const result = document.getElementById("result");

    const buttonPressed = e => { 
        if(e.target.id == "clarinet"){
            alert("Correct!")
            document.getElementsByTagName("body")[0].style.backgroundColor = "green"
            
        }
        else{
            alert("Wrong! Try Again")
            document.getElementsByTagName("body")[0].style.backgroundColor = "red"
        }
   
    }



    for (let button of images) {
        button.addEventListener("click", buttonPressed);

    }
   

}

function reset(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(230, 252, 252)"
}

