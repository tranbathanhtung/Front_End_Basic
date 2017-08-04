var $overlay=$('<div id="overlay"></div>');
var $img= $("<img>");
var $caption = $("<p></p>");

$overlay.append($img);
$("body").append($overlay)
$overlay.append($caption);

$("#imageGallery a").click(function(event){
  event.preventDefault();
 var imageLocation = $(this).attr("href");
 $img.attr("src",imageLocation);
 $overlay.show();
var captionText=$(this).children("img").attr("alt");
$caption.text(captionText);

});
$overlay.click(function(){
  $(this).hide();
});
