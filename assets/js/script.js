//------Login---------
$(".menu-box").on("click", function() {
    $(".header-menu-bar").addClass("d-block").removeClass("d-none")
  });
$(".close-icon").on("click",function(){
    $(".header-menu-bar").addClass("d-none").removeClass("d-block")
})


// ------Register-------
$("#id-card-info").on("click",function(){
    $(".id-cards").addClass("d-block").removeClass("d-none")
    // $(".id-cards").toggle()
})

// kenara clickleyende baglanmalidi ama islemir?
$("window").on("click",function(){
    $(".id-cards").addClass("d-none").removeClass("d-block")
})
$('.register-section').click(function(event){
    event.stopPropagation();
});

// -----Rates-----------

// herbiri kenara clickde remove olmalidi ???
$(".branch-delivery").on("click", function() {
    $(".branch-delivery").addClass("bg-orange")
});

$(".address-delivery").on("click", function() {
    $(".address-delivery").addClass("bg-orange")
});

$("#Baki").on("click", function() {
    $("#Baki").addClass("bg-dark")
});

$("#Sumgayit").on("click", function() {
    $("#Sumgayit").addClass("bg-dark")
});

$("#Xirdalan").on("click", function() {
    $("#Xirdalan").addClass("bg-dark")
});


// ------Menu bar left----- balance services sehifesinden bax!

// ancaq 1inde isleyir, digerlerinde yox ??
$("#choosed-section").on("click", function() {
    $("#choosed-section").addClass("bg-orange-rounded")
    $("#choosed-logo").addClass("choosed-logo")
    $("#current-logo").addClass("d-none")
});




// ----- Make-order ------
$("#delete-btn").on("click",function(){
    $(".new-form").addClass("d-none").removeClass("d-block")
})

$(".add-new-link").on("click",function(){
    $(".new-form").addClass("d-block").removeClass("d-none")
})