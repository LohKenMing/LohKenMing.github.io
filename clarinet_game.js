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
            selected.push(instrument)
            if(instrument == "clarinet"){
                is_clarinet = true
            }
            count += 1
        }
    }

    for(thing of selected){
        string += ` <div class="col-3">
        <img src="${thing}.jpeg" alt="">
      </div>`
    }

    document.getElementById("clarinet_game").innerHTML = string

}