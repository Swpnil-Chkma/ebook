$(".thumbnail").click(function(){
    $(".main-viewer").html(
        $(this).html());
    });
    $(".list-group-item-action").click(function(){
        $(".thumbnail").removeClass("active")
        $(this).addClass("active");
    });
    $("li a").click(function(){
        $("li a").removeClass("active")
        $(this).addClass("active");
    });
    
    let toggle = document.getElementById("toggle");
    document.getElementById("flexSwitchCheckDefault").addEventListener("click", function(){
        toggle.classList.toggle("day");
      });