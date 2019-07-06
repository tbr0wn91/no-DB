const PlayerData = require("../.././data.json")

let lineup = [];

let id = 27;
module.exports = {
    AllPlayers: (req, res, next) => {
        res.status(200).send(PlayerData);
    },

    CreateLineup: (req, res, next) => {
        res.status(200).send(lineup)
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
        
        const { avg, homeruns, RBIs} = req.body;
        const updateId = req.params.id;
        const updateAvg = req.query.avg
        console.log(req.query)
        console.log("id thst was sent", updateId)
        const PlayerToUpdate = PlayerData.findIndex(player => player.id == updateId);
        console.log("this should return",PlayerToUpdate)
        let player = PlayerData[PlayerToUpdate];
        console.log(player)
        player.avg = updateAvg;

        // PlayerData[PlayerToUpdate] = {
        //     id: player.id,
        //     number: player.number,
        //     name: player.name,
        //     position: player.position,
        //     avg: avg,
        //     homeruns: player.homeruns,
        //     RBIs: player.RBIs
        // };
        
        res.status(200).send(PlayerData);

    },

    AddPlayer: (req, res, next) => {
        const PlayerAddId = req.params.id;
        
        const PlayerAdded = PlayerData.findIndex(player => player.id == PlayerAddId)
 
        let YourPlayer = PlayerData[PlayerAdded]
        PlayerData[PlayerAdded] = {
            id: YourPlayer.id,
            number: YourPlayer.number,
            name: YourPlayer.name,
            position: YourPlayer.position,
            avg: YourPlayer.avg,
            homeruns: YourPlayer.homeruns,
            RBIs: YourPlayer.RBIs
        },
        lineup.push(YourPlayer);
        res.status(200).send(lineup);
    },
    
    DeletePlayer: (req, res, next) => {
        const {id} = req.params;
        PlayerData.splice(id, 1);
        res.status(200).send(PlayerData);
    }
}