// JS vs jQuery
// document.getElementById("results");
// $("#results");
// document.getElementsByTagName("p");
// $("p");
// document.getElementsByClassName("text");
// $(".text");
function register(){
    let name = document.getElementById("textName").value;
    return document.getElementById("name").textContent = name;
}
function clickMe(){
    $("button").on('click', function(){
        $("#result").text("THE BUTTON WAS CLICC'D ON");
        $("p:first").hide();
        $("p:last").css('background-color', 'beige');
    });
}
//anonymous function, triggered only this way
function init(){
    $("#first-btn").on('click', clickMe);
    $("#first-btn").on("mouseover", function(){
        console.log("Mouse over");
        $(this).addClass("btn")
    });
    $("#first-btn").on("mouseleave", function(){
        console.log("Mouse leave");
        $(this).removeClass("btn");
    });
}


window.onload=init;


