function initButtons(){
    $(".get-started").click(function(e){
        $("#home div").removeClass('active');
        $("#addNav div").addClass('active');
        $('.text-wrapper').html(SERVICE.getGetStartedContent);
        $('.btn-holder').html(SERVICE.getCreateNavButton);
    })

    $("#home").click(function(e){
        $("#addNav div").removeClass('active');
        $("#home div").addClass('active');
        $('.text-wrapper').html(SERVICE.getHomeContent);
        $('.btn-holder').html(SERVICE.getHomeStartButton);
    })
}

$(document).ready(function(){
    initButtons();
});