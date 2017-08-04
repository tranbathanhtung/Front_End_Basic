// Puppy images fade in
$('main img').css('display', 'none').fadeIn(1600);

// 'Selected' puppies are visually different from unselected puppies
$('.card').on('click', function() {
  $(this).toggleClass('selected');
});

// Not a necessary feature, but shows the use of hover()
$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  }, function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});



// Adds a pet to the page with user input
$("#add-pet").on('click',function(){

var $name = $('#pet-name').val();
var $species = $('#pet-species').val();
var $notes = $('#pet-notes').val();

// Assemble the HTML of our new element with the above variables
  var $newPet = $(
    '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name +
    '</p><p><strong>Species:</strong> ' + $species +
    '</p><p><strong>Notes:</strong> ' + $notes +
    '</p><span class="close">&times;</span></div></section>'
  );

$('#posted-pets').append($newPet);

});
