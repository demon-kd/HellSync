

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret : "199a619d22dd4e55a4a2c1a7a3d70e63",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "friston",
      host: "192.99.10.133",
      port:  5140,
      secure: false
    }
  ]
}
