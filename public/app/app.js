function addMainNav(){
    console.log('add', finalText)

    let fakePageData ={
        navName:navName,
        content:'<h1>Hello</h1>',
        subNavs:[]
    }

    SERVICE.returnData(fakePageData);
}

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

    // var navArray = ["products", "about", "contact"];

    $(".createLink").click(function(e){

        // var newNavName = finalText.toLowerCase().trim();

        SERVICE.checkMainNavName(finalText, addMainNav);
        // if(finalText.trim().length !== 0){
        //     var checker = true;
        //     for(var i = 0; i < navArray.length; i++){
        //         if(navArray[i] === finalText){
        //             checker = false
        //             alert("There is already a page named that.");
        //         }
        //     }
        //     if(checker){
        //         $(".modal").css("display", "none");
        //         $(".mainNavModal").css("display", "flex");
        //         $(".navName").html(finalText.toLowerCase());
        //         alert("Your page will be named " + finalText.toLowerCase());
        //         navArray.push(finalText);
        //         console.log(navArray);
        //     }

        // }
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

    $('.savePage').click(function(e){
        e.preventDefault();
        var justHtml = quill.root.innerHTML;
        $('.displayPage').html(justHtml);
    }) 
    };

$(document).ready(function(){
    SERVICE.initFirebase();
    initButtons();
    addGetStartedListener();
});