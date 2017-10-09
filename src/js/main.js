//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.min.js


//= app.js
$(document).ready(function () {
    var ul_p = $("ul p");
    ul_p.hide();

    $("li").css("cursor", "pointer");
    $("li:first-child").css("cursor", "default");
    
 
    $("li").click(function(){
        $(this).children("p").slideToggle(500);
   
      
    });

});