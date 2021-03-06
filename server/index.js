const express = require('express');
const app = express();
app.use(express.json());
const PlayerData = require("../data.json")
const Players = require("./controller/playerController")



app.get("/api/players", Players.AllPlayers);


app.post("/api/new_player", Players.CreatePlayer);

app.put("/api/player_stats/:id", Players.UpdateStats);


app.delete("/api/delete/:id", Players.DeletePlayer);















const port = 3077;
app.listen(port, () => console.log(`server listening on port ${port}`))