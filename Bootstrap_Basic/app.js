

$(document).ready(function(){

    $(".name").focus(function(){
        $("#name").css({"top":"0","opacity":"1","color":"	#FF00FF"});
    });
  $(".name").blur(function(){
        $("#name").css({"top":"2em","opacity":"0","color":"	#FF00FF"});
    });
      $(".email").focus(function(){
        $("#email").css({"top":"0","opacity":"1","color":"	#FF00FF"});
    });
  $(".email").blur(function(){
        $("#email").css({"top":"2em","opacity":"0","color":"	#FF00FF"});
    });
      $(".phone").focus(function(){
        $("#phone").css({"top":"0","opacity":"1","color":"	#FF00FF"});
    });
  $(".phone").blur(function(){
        $("#phone").css({"top":"2em","opacity":"0","color":"	#FF00FF"});
    });
        $(".message").focus(function(){
        $("#message").css({"top":"0","opacity":"1","color":"	#FF00FF"});
    });
  $(".message").blur(function(){
        $("#message").css({"top":"2em","opacity":"0","color":"#FF00FF"});
    });
});
