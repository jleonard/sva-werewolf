// A helper function to emit a custom event
//---------------------------------------------
function emit(eventName,object){
  var event = new CustomEvent(eventName,{'bubbles':true,'cancelable':true,'detail':object});
  document.body.dispatchEvent(event);
}
