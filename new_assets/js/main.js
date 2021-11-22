$(function () {
    "use strict";

    // var invalidChars = ["-", "e", "+", "E"];

    // $("input[type='number']").on("keydown", function(e){ 
    //     if(invalidChars.includes(e.key)){
    //          e.preventDefault();
    //     }

   
    $('#defaultCheckmain').change(function(){
     

        if($(this).is(":checked")) {
            $('.changeme').addClass('color');
            $('.circle1').addClass('activee');
            $('.orange1').addClass('point');


        } else  {
            $('.changeme').removeClass('color');
            $('.circle1').removeClass('activee');

        }
    });
    $('#defaultCheckmain1').change(function(){
        if($(this).is(":checked")) {
            $('.changeme1').addClass('color');
            $('.circle2').addClass('activee');
            $('.orange2').addClass('point');


        } else {
            $('.changeme1').removeClass('color');
            $('.circle2').removeClass('activee');

        }
    });
    $('#defaultCheckmain2').change(function(){
        if($(this).is(":checked")) {
            $('.changeme2').addClass('color');
            $('.circle3').addClass('activee');
            $('.orange3').addClass('point');


        } else {
            $('.changeme2').removeClass('color');
            $('.circle3').removeClass('activee');

        }
    });
    $('#defaultCheckmain3').change(function(){
        if($(this).is(":checked")) {
            $('.changeme3').addClass('color');
            $('.circle4').addClass('activee');
            $('.orange4').addClass('point');


        } else {
            $('.changeme3').removeClass('color');
            $('.circle4').removeClass('activee');

        }
    });
    $('#defaultCheckmain4').change(function(){
        if($(this).is(":checked")) {
            $('.changeme4').addClass('color');
            $('.circle5').addClass('activee');
            $('.orange5').addClass('point');


        } else {
            $('.changeme4').removeClass('color');
            $('.circle5').removeClass('activee');

        }
    });
    $('#defaultCheckmain5').change(function(){
        if($(this).is(":checked")) {
            $('.changeme5').addClass('color');
            $('.circle6').addClass('activee');
            $('.orange6').addClass('point');


        } else {
            $('.changeme5').removeClass('color');
            $('.circle6').removeClass('activee');

        }
    });
    $('#defaultCheckmain6').change(function(){

        if($(this).is(":checked")) {
            $('.changeme6').addClass('color');
            // $('.circle7').removeClass('activee');
            $('.orange7').addClass('point');
            $('.circle7').addClass('activee');




        } else  {
            $('.changeme6').removeClass('color');
             $('.circle7').removeClass('activee');





        }
    });
 
});

var inputEl = document.getElementById('tel');
var goodKey = '0123456789+ ';

var checkInputTel = function(e) {
  var key = (typeof e.which == "number") ? e.which : e.keyCode;
  var start = this.selectionStart,
    end = this.selectionEnd;

  var filtered = this.value.split('').filter(filterInput);
  this.value = filtered.join("");

  /* Prevents moving the pointer for a bad character */
  var move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
  this.setSelectionRange(start - move, end - move);
}

var filterInput = function(val) {
  return (goodKey.indexOf(val) > -1);
}

inputEl.addEventListener('input', checkInputTel);