var str = document.getElementById("Comment");

function make_bold(){
    if(document.getElementById("Comment").style.fontWeight == "normal")
        document.getElementById("Comment").style.fontWeight = "bold";
    else
        document.getElementById("Comment").style.fontWeight = "normal";
}

function make_italic(){
    if(document.getElementById("Comment").style.fontStyle == "normal")
        document.getElementById("Comment").style.fontStyle = "italic";
    else
        document.getElementById("Comment").style.fontStyle = "normal";
}

function make_italic(){
    if(document.getElementById("Comment").style.fontStyle == "normal")
        document.getElementById("Comment").style.fontStyle = "italic";
    else
        document.getElementById("Comment").style.fontStyle = "normal";
}

function make_underline(){
    if(document.getElementById("Comment").style.textDecoration == "none")
        document.getElementById("Comment").style.textDecoration = "underline";
    else
        document.getElementById("Comment").style.textDecoration = "none"
}

function change_size(){
    document.getElementById("Comment").style.fontSize = document.getElementById("fontS").value;
}

function change_family(){
    document.getElementById("Comment").style.fontFamily = document.getElementById("fontF").value;
}

$(".container button").css("opacity","0");

$(".item1").mouseenter(
    function(){
        $(".item1").css({"opacity":"0.5","background-color":"black"});
        $(".item1 button").css("opacity","1");
    }
)

$(".item1").mouseleave(
    function(){
        $(".item1").css("opacity","1");
        $(".item1 button").css("opacity","0");
    }
)

$(".item2").mouseenter(
    function(){
        $(".item2").css({"opacity":"0.5","background-color":"black"});
        $(".item2 button").css("opacity","1");
    }
)

$(".item2").mouseleave(
    function(){
        $(".item2").css("opacity","1");
        $(".item2 button").css("opacity","0");
    }
)

$(".item3").mouseenter(
    function(){
        $(".item3").css({"opacity":"0.5","background-color":"black"});
        $(".item3 button").css("opacity","1");
    }
)

$(".item3").mouseleave(
    function(){
        $(".item3").css("opacity","1");
        $(".item3 button").css("opacity","0");
    }
)

$(".item4").mouseenter(
    function(){
        $(".item4").css({"opacity":"0.5","background-color":"black"});
        $(".item4 button").css("opacity","1");
    }
)

$(".item4").mouseleave(
    function(){
        $(".item4").css("opacity","1");
        $(".item4 button").css("opacity","0");
    }
)

$(".item5").mouseenter(
    function(){
        $(".item5").css({"opacity":"0.5","background-color":"black"});
        $(".item5 button").css("opacity","1");
    }
)

$(".item5").mouseleave(
    function(){
        $(".item5").css("opacity","1");
        $(".item5 button").css("opacity","0");
    }
)

$(".item6").mouseenter(
    function(){
        $(".item6").css({"opacity":"0.5","background-color":"black"});
        $(".item6 button").css("opacity","1");
    }
)

$(".item6").mouseleave(
    function(){
        $(".item6").css("opacity","1");
        $(".item6 button").css("opacity","0");
    }
)

$(".item7").mouseleave(
    function(){
        $(".item7").css("opacity","1");
        $(".item7 button").css("opacity","0");
    }
)

$(".item7").mouseenter(
    function(){
        $(".item7").css({"opacity":"0.5","background-color":"black"});
        $(".item7 button").css("opacity","1");
    }
)

$(".item8").mouseleave(
    function(){
        $(".item8").css("opacity","1");
        $(".item8 button").css("opacity","0");
    }
)

$(".item8").mouseenter(
    function(){
        $(".item8").css({"opacity":"0.5","background-color":"black"});
        $(".item8 button").css("opacity","1");
    }
)

$(".item9").mouseleave(
    function(){
        $(".item9").css("opacity","1");
        $(".item9 button").css("opacity","0");
    }
)

$(".item9").mouseenter(
    function(){
        $(".item9").css({"opacity":"0.5","background-color":"black"});
        $(".item9 button").css("opacity","1");
    }
)

function changecolor() {
    document.querySelector("colorinputcolor").addEventListener("change",f1);
    function f1 () {
        var a = document.querySelector("colorinputcolor").value;
        var b = document.getElementById("Comment");
        b.style.color = "#FF0000";
        
    }
    
       

}
Aa