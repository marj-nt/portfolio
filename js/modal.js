/* Credit: https://codepen.io/r3dg3cko/pen/ZLryQG */

$(function(){
    $("#modal01").load("/modal.html"); 
});

function enlarge(element) {

    var imgHeight = element.naturalHeight;

    console.log(imgHeight);
    
    document.getElementById("img01").src = element.src;
    
    document.getElementById("modal01").style.display = "inline-block";

    $("html").addClass("modal-open");

    if(element.classList.contains('tall')) {
        $(".modal-content").addClass('supertall');
    }
    else if(element.classList.contains('long')) {
        $(".modal-content").height(imgHeight);
    }
    else {
        $(".modal-content").removeClass('supertall');
        $(".modal-content").height('100vh');
    }

}

// function enlarge(element) {

//     var imgHeight = element.naturalHeight;

//     console.log(imgHeight);

//     var filepath = element.src;
//     var newpath = filepath.replace("hifi", "midfi");
    
//     document.getElementById("img01").src = newpath;
//     document.getElementById("img02").src = element.src
    
//     document.getElementById("modal01").style.display = "inline-block";

//     $("html").addClass("modal-open");

//     if(element.classList.contains('tall')) {
//         $(".modal-content").addClass('supertall');
//     }
//     else if(element.classList.contains('long')) {
//         $(".modal-content").height(imgHeight);
//     }
//     else {
//         $(".modal-content").removeClass('supertall');
//         $(".modal-content").height('100vh');
//     }

// }

function exit(element) {
    $("html").removeClass("modal-open");
    document.getElementById("modal01").style.display = "none";
}