function displayData(allData){
    var container = '<nav class="addSaveNav">';
   allData.forEach(function(doc){
        var id = doc.id;
        var data = doc.data();
        container += `<a class='navLink' href='#' id='${id}'>${data.navName}</a>`
   })
   container += '</nav>'
   $(".showData").html(container);
}

function init(){

    $("#getData").click(function(e){
        e.preventDefault();
        PRACTICE_SERVICE.getAllData(displayData);
    })

    $("#addData").click(function(e){
        e.preventDefault();
        let navData = $('#nav-input')
        .val()
        .trim()
        .toLowerCase();
        
    if(navData != ''){
        PRACTICE_SERVICE.checkPages(navData, alertUser);
    }else{
        alert("Please enter data")
    }

    })
    // $("#checkPages").click(function(e){
    //     e.preventDefault();
    //     PRACTICE_SERVICE.checkPages('home');
    // })
}

function alertUser(result){
    alert(result);
}

$(document).ready(function(){
    PRACTICE_SERVICE.initFirebase(init);
});