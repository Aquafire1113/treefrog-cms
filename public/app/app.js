function initButtons(){
    $("#home").click(function(e){
        $("#addNav div").removeClass('active');
        $("#home div").addClass('active');
        $('.text-wrapper').html(SERVICE.getHomeContent);
        $('.btn-holder').html(SERVICE.getHomeStartButton);
        addGetStartedListener();
        $(".nav-modal").off();
    })
}

function addGetStartedListener(){
    $(".get-started").click(function(e){
        $("#home div").removeClass('active');
        $("#addNav div").addClass('active');
        $('.text-wrapper').html(SERVICE.getGetStartedContent);
        $('.btn-holder').html(SERVICE.getCreateNavButton);
        $(".alert-box").html(SERVICE.modalContent);
        displayModal();
        $(".get-started").off(event);
    })
}

function displayModal(){

    var finalText="";

    $(".nav-modal").click(function(e){
        $(".modal").css("display", "flex");
    })

    $(".cancel").click(function(e){
        $(".modal").css("display", "none");
    })
    
    $(".clickBox").click(function(e){
        $(".modal").css("display", "none");
    })

    $( ".linkInput" ).keyup(function() {
        finalText = $( this ).val();
    }).keyup();

    $(".createLink").click(function(){
        if(finalText.trim().length !== 0){
            $(".modal").css("display", "none");
            $(".mainNavModal").css("display", "flex");
            $(".navName").html(finalText);
        }
    });

    var toolbarOptions = [

        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                

     ]

    var quill = new Quill('#editor', {
        modules :{
            toolbar: toolbarOptions
        },
        theme: 'snow'
      });
}



$(document).ready(function(){
    initButtons();
    addGetStartedListener();
});