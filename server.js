const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const friends = [
  {
    "name":"Elizabeth",
    "photo":"https://vignette.wikia.nocookie.net/unikitty/images/3/3f/Unikitty_1.png/revision/latest/scale-to-width-down/428?cb=20180121071533",
    "scores":[5,1, 4,4,5,1, 2,5,4, 1]
  }
  ];
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

// ===============================================================================

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


  app.post("/api/friends", function(req, res) { 
       
      var added = friends.push(req.body);
      res.json(added);
    
    });     


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
