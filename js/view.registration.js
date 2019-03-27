// This is the registration controller
// all registration logic is managed here

(function(){

  // When the page loads.
  // Check if there is an existing user saved in the browser
  //----------------------------------------------------------


  // Listen for a register.user event from the HTML doc
  //----------------------------------------------------------

  // format the phone number to make it compatible
  // with TWILIO which requires a certain format
  function formatPhone(phone){

    // take the submitted number
    // and strip out any special characters
    phone = phone
      .replace(/ /g,'')
      .replace(/-/g,'')
      .replace(/\(/g,'')
      .replace(/\)/g,'')
      .replace(/\./g,'');

    // if the number doesn't start with '+'
    if(phone.indexOf('+') <= -1){
      // add a +
      var add = '+';

      // if the number doesn't start with a country code of 1
      if(parseInt(phone[0],10) !== 1){
        // add a 1
        add += '1';
      }
      // add the new characters to the front of the number
      phone = add + phone;
    }
    // return the formatted number
    return phone;
  }

})();
