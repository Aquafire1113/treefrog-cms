function initButtons(){
    $(".get-started").click(function(e){
        $("#home div").removeClass('active');
        $("#addNav div").addClass('active');
        displayModal();
    })

    $("#home").click(function(e){
        $("#addNav div").removeClass('active');
        $("#home div").addClass('active');
        $('.text-wrapper').html(SERVICE.getHomeContent);
        $('.btn-holder').html(SERVICE.getHomeStartButton);
    })
}

function displayModal(){

    $('.text-wrapper').html(SERVICE.getGetStartedContent);
    $('.btn-holder').html(SERVICE.getCreateNavButton);

    $(".nav-modal").click(function(e){
        console.log('click');
        $(".modal").css("display", "flex");
    })
}

$(document).ready(function(){
    initButtons();
});