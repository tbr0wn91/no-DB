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
        console.log(avg, homeruns, RBIs, updateId)
        const PlayerToUpdate = PlayerData.findIndex(player => player.id == updateId);
        console.log(PlayerToUpdate)
        let player = PlayerData[PlayerToUpdate];

        PlayerData[PlayerToUpdate] = {
            id: player.id,
            number: player.number,
            name: player.name,
            position: player.position,
            avg: avg,
            homeruns: homeruns,
            RBIs: RBIs
        };
        console.log(PlayerData)
        res.status(200).send(PlayerData);

    },
}