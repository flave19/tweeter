$(document).ready(function() {

  $('textarea').on('input', function(){
    const limit = 140; 
    const currentAmount = this.value.length;
    $(".counter").text(limit -currentAmount);

  })


});

// counter is bad practice; try using $(this.parent.find)  finding via parents is more permissive than find sibling 
// can also try siblings &&  .closest 

// tru


