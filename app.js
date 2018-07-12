const express = require("express");
const app = express();
const PORT = process.env.PORT || "8080";

function Player(name, pos, off, def){
    this.name = name;
    this.position = pos;
    this.offense = off;
    this.defense = def;
}

const generateNewPlayers = () => {
    
    let playersArray = [];

    const namesArr = ["Collin", "Slim Shady", "Dr Dre", "Ez", "Mark Wahlberg", "Bill Murray", "Rob Reiner", "Ryan Reynolds", "Spinal Tap"];

    const posArr = ["Missionary", "Washed Up", "Fuckin Rad"];

    for(let i = 0; i < namesArr.length; i++){
        let player = new Player(
            namesArr[i],
            posArr[Math.floor(Math.random() * posArr.length)],
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1,
    
        );
    
        playersArray.push(player);
    }

    return playersArray;
}

app.get("/api/players", (req, res) => {
    res.json(generateNewPlayers());
});



app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
});