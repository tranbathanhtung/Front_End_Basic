var $select = $('<select></select>');
$('#menu').append($select);
$("#menu a").each(function(){
  var $anchor= $(this);
  var $option= $("<option></option>");

  if($anchor.parent().hasClass("selected")){
    $option.prop("selected",true);
  }


  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});


var $button =$('<button>Go</button>');
$("#menu").append($button);
$button.click(function(){
window.location=  $select.val();
});
