
var profileData = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(profileData);

  });

  // calculation to determine new friend (smaller difference)
  app.post("/api/friends", function(req, res) {
 
    for (let i = 0; i < profileData.length; i++) {

      // var currentScore = compare(req.body, profileData[i]);
      // if (currentScore < bestFriendDifferentScore) {
      //   var newBFF = profileData[i];
      //   var newBFFScore = currentScore;
      }
    })
    // console.log(newBFF);
    // profileData.push(req.body);
    // res.json(newBFF);
  // });
};

function compare(newBFFscore, oldBFFscore) {
  var totalDifferences = 0;
  for (var i = 0; i < oldBFFscore.scores.length; i++) {
    totalDifferences += Math.abs(newBFFscore.scores[i] - oldBFFscore.scores[i]);
  }
  return totalDifferences;


  };
    

