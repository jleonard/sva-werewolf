// This is the new round view and it is responsible
// for updating the new round UI

(function(){
  // When the server starts a new round
  //-------------------------------------------------
  socket.on('new-round',function(time){

    // select the new round message
    var newRoundMessage = document.getElementById('newRoundMessage');

    // set the text in the new round view to the current time (night or day)
    newRoundMessage.textContent = time;

  });

})();
