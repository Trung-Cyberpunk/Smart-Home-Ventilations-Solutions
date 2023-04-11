
$(document).ready(function(){
    $("#open-menu").click(function(){
        $(".nav__links_3").slideDown("slow");
        $("#open-menu").hide();
        $("#close-menu").show();
    })
})

$(document).ready(function(){
    $("#close-menu").click(function(){
        $(".nav__links_3").slideUp("slow");
        $("#open-menu").show();
        $("#close-menu").hide();
    })
})
