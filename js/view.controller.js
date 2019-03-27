// This is the view controller
// it is only responsible for listening for game events
// and hiding and showing screens (aka controlling the views)

(function(){

  // Listen for an alert to confim that the registration process is complete
  //---------------------------------------------------------------
  document.body.addEventListener('registration.complete',function(e){

    // hide the registration view
    hide('registration');

    // show the game view
    show('game');
  });

  // Listen for an alert that the registration process is incomplete
  //---------------------------------------------------------------
  document.body.addEventListener('registration.incomplete',function(e){
    // show the registration view
    show('registration');

    // hide the game view
    hide('game');
  });

  // When the server starts a new round
  //-------------------------------------------------
  socket.on('new-round',function(time){

    // hide the end game view (if it is showing)
    hide('endGame');

    // show the new round view
    show('newRound');

    // wait 2500 milliseconds (2.5 seconds) and then run this function
    setTimeout(function(){
      // hide the new round view
      hide('newRound');
    },2000);
  });

  // When the server starts a new game
  //-------------------------------------------------
  socket.on('new-game',function(){
    // hide the end game view (if it is showing)
    hide('endGame');
  });

  // When the sever ends the game
  //-------------------------------------------------
  socket.on('end-game',function(data){
    // show the end game view
    show('endGame');
  });

})();
