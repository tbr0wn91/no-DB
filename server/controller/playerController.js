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
}