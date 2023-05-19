$(".menu-box").on("click", function() {
    $(".header-menu-bar").addClass("d-block").removeClass("d-none")
  });
$(".close-icon").on("click",function(){
    $(".header-menu-bar").addClass("d-none").removeClass("d-block")
})
