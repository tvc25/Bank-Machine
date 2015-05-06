$(document).ready(function(){

// on click of button make something happen

// clicking the deposit button to make a deposit and store the amount
var savingsTotal = 0
var number = 0
var checkingTotal = 0

// Deposit from Checkings window

$('#deposit1').on('click', function() {
  var number = $('#amount1').val();
  // console.log(number);
 // $("#amount1").val(number);
 // $('#balance1').html('$'+number)
 // var balance1 = $('#balance1').html();
 checkingTotal = checkingTotal + parseInt(number);
 $('#balance1').html(checkingTotal);
});

$('#withdraw1').on('click', function() {
  var number = $('#amount1').val();
  if(number<=checkingTotal){
    checkingTotal = checkingTotal - parseInt(number);
    $('#balance1').html(checkingTotal);
  } else if (number <= (checkingTotal+savingsTotal)) {
   number = number - checkingTotal;
   checkingTotal = 0;
   savingsTotal= savingsTotal-number;
   $('#balance1').html(checkingTotal);
   $('#balance2').html(savingsTotal);
  }
  else {
    alert("no money in the bank");
  };

  // console.log(number);
 // $('#amount1').val(number);
  
});

$('#deposit2').on('click', function() {
  var number = $('#amount2').val();
  console.log(number);
 // $("#amount1").val(number);
  savingsTotal = savingsTotal + parseFloat(number);
 $('#balance2').html(savingsTotal);
});


$('#withdraw2').on('click', function() {
  var number = $('#amount2').val();
  // console.log(number);
 // $('#amount1').val(number)
 if(number <=savingsTotal) {
  savingsTotal = savingsTotal - parseFloat(number);
  $('#balance2').html(savingsTotal);
}
else {
  alert("no money in the bank");
};

if (savingsTotal === 0){
  $('#balance2').css('background-color', 'red');
};

// if checkings total bigger than 0 make background grey
// if checkings total is less than 0 make red


});




})
  
//   var n = $('.balance');

//   if (n <= 0) {
//     $('.balance').css("border", "red");
//   } 
//   else {
//     $('.balance').attr;
//   }

// })

// var n = $("#example div").length;
// $("body").css("background", (n < 2) ? "green" : "orange");

// make a red border around the box when the value is less than or equal to 0

// allow deposits into the account

// allow withdrawals from the account



