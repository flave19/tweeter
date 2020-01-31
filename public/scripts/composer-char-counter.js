$(document).ready(function() {

  $('textarea').on('input', function(){

    const limit = 140; 
    const currentAmount = this.value.length;
    const remaining = limit -currentAmount;
    $("#counter").text(remaining) ;
    
    if (remaining < 0) {
      $("#counter").css('color', 'red');
      $('.tooLong').css('display', 'block')
    }
    else{
      $('#counter').css('color', 'blue')
      $('.tooLong').css('display', 'none')
    }
    
  })

  
});

// counter is bad practice; try using $(this.parent.find)  finding via parents is more permissive than find sibling 
// can also try siblings &&  .closest 

// tru


