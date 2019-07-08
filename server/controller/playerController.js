const PlayerData = require("../.././data.json")

// let lineup = [];

let id = 27;
module.exports = {
    AllPlayers: (req, res, next) => {
        res.status(200).send(PlayerData);
    },

   

    CreatePlayer: (req, res, next) => {
        const { number, name, position, avg, homeruns, RBIs} = req.body;
        PlayerData.push({
            id: id,
            number,
            name,
            position,
            avg,
            homeruns,
            RBIs
        });
        id++;
        res.status(200).send(PlayerData)
    },

    UpdateStats: (req, res, next) => {
        
        
        const updateId = req.params.id;
        const updateAvg = req.query.avg
        console.log(req.query)
        console.log("id thst was sent", updateId)
        const PlayerToUpdate = PlayerData.findIndex(player => player.id == updateId);
        console.log("this should return",PlayerToUpdate)
        let player = PlayerData[PlayerToUpdate];
        console.log(player)
        player.avg = updateAvg;

      
        
        res.status(200).send(PlayerData);

    },

   
    
    DeletePlayer: (req, res, next) => {
        
        const deleteId = req.params.id;
        // console.log("the index to delete", index)
        const PlayerToDelete = PlayerData.findIndex(player => player.id == deleteId);
        PlayerData.splice(PlayerToDelete, 1);
        res.status(200).send(PlayerData);
    }
}