
function showNumber(userNumber) {
  userNumber = $("#choosenUser").val();
  $("#showChoosen").load(`http://numbersapi.com/${userNumber}`);
  $('.container-result').addClass('show');
  let tmp = setTimeout(removeClass, 6000);
}

function removeClass(){
    $('.container-result').removeClass('show');
}



