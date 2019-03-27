const CONFIG = {
  //'server' : 'http://localhost:3000'
  'server': 'https://aip-platform--stage.herokuapp.com'
}

var socket = io(CONFIG.server);
socket.on('connect', () => {
  console.log('socket connected ',socket.id); // 'G5p5...'
});
socket.on('connect_error', (error) => {
  console.log('error ',error);
});

document.addEventListener('registration.complete',function(e){
  CONFIG.userId = e.detail;
  console.log('user id ',CONFIG.userId);
});

document.addEventListener('new.game',function(){
  var request = new XMLHttpRequest();
  request.open('GET', CONFIG.server+'/newGame', true);
  request.send();
});

socket.on('players',function(players){
  for(var ii = 0; ii < players.length; ii++){
    console.log(players[ii],CONFIG.userId);
    if(players[ii].id === CONFIG.userId){
      console.log('match');
      CONFIG.user = players[ii].data;
      console.log(CONFIG);
    }
  }
});
