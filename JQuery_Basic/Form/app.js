var $password=$("#password");
var $confirmPassword=$("#confirm_password");

$("form span").hide();

function passwordEvent(){
  if($password.val().length > 8){
    $password.next().hide();
  }
  else{
    $password.next().show('slow');
  }
}
function confirmPass(){
  if($password.val()=== $confirmPassword.val()){
    $confirmPassword.next().hide();
  }
  else{
    $confirmPassword.next().show('slow');
  }
}

$("#password").focus(passwordEvent).keyup(passwordEvent);
$("#confirm_password").focus(confirmPass).keyup(confirmPass);
