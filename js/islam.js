$(document).ready(function(){
$(window).scroll(function(){
    if ($(this).scrollTop() > 50){
        $("#scroll").css({"width":"100%", "position":"fixed","top":"0px", "z-index":"+8" ,"background-image":"url('../pic1/head11.jpg')","background-size":"100% 100%","height":"60px","display":"inline-block" })
    }
   else {
    $("#scroll").css({"width":"100%","background":"none" })
   }
})
$(window).scroll(function(){
    if ($(this).scrollTop() > 200){
        $("#scroll1").css({"width":"100%", "position":"fixed","top":"0px", "z-index":"+8" ,"background-image":"url('../pic1/head11.jpg')","background-size":"100% 100%","height":"60px","display":"inline-block" })
      
    }
   else {
    $("#scroll1").css({"width":"100%", "display":"none" })
   
   }
})
})


