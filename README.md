checklist:

###frontend
 -reset.css
 -package.json
    -main:server => so we can type nodemon without giving file



###proxy
-setupProxy.js
    - :3077

###dependencies
-axios
-http-proxy-middleware


#frontend folder structure
-src/
    -App.js => class(state)
    -index.js
    -components/
        -SearchPlayer.js (state)
        -YourTeam.js (state)
        -PlayerName.js (no state)
        -PlayerInfo.js (no state)




#backend

#server folder-structure
-server/
    -index.js
    -controller/
        -playerController.js


#dependencies
-express
-axios

###routes
-get("/api/players")
-get("/api/lineup")
-post("/api/players")
-put("/api/players/:id")
-put("/api/players/:id")
-delete("/api/players/:id")


``` js
const player = {
    id,
    name,
    position,
    avg,
    homeruns,
    RBIs,
}```
