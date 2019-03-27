// This is the end game view and it is responsible
// for updating the end game UI

(function(){
  // When the sever ends the game
  //-------------------------------------------------
  socket.on('end-game',function(data){

    // Set the winning message based on whether
    // there are more humans or wolves remaining at the end of the game
    var message = data.humans > data.wolves ? 'Humans win!' : 'Werewolves win!';

    // create a message that tally's the winning group
    var tally = data.humans > data.wolves ? data.humans + ' remaining' : data.wolves + ' remaining';

    // select the end game message element
    var endGameMessage = document.getElementById('endGameMessage');

    // select the end game tally element
    var endGameTally = document.getElementById('endGameTally');

    // set the end game message
    endGameMessage.textContent = message;

    // set the tally message
    endGameTally.textContent = tally;

  });
})();
