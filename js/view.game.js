// This is the game view
// all game interactions,
// events and variables are managed here.

(function(){

  // create an array (list) to be populated with the list of players.
  var PLAYERS = [];

  // a variable to store the current time in the game (eg. night or day).
  var TIME = '';

  // a variable to store whether or not the player has voted in a round.
  var VOTED = false;

  // a reference to the HTML container for the list of players.
  var cardContainer = document.getElementById('players');

  // a reference to the HTML alert
  var gameAlert = document.getElementById('gameAlert');

  // a reference to the HTML alert message
  var gameAlertMessage = document.getElementById('gameAlertMessage');

  // When the page loads, get the current player list
  //-------------------------------------------------------------

  // When the user clicks on any element in the card container
  //---------------------------------------------------------------

  // When the server changes the time of day
  //---------------------------------------------

  // When the server starts a new round
  //-------------------------------------------------

  // When the server eliminates someone at the end of a round.
  //-------------------------------------------------------------

  // Listen for alert.player events
  //--------------------------------------------------

  // When the server has updated the player list
  //--------------------------------------------------

  // Function that accepts a player and makes a new HTML object using their info.
  //--------------------------------------------------


})();
