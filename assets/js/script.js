//------header login---------
$(".menu-box").on("click", function() {
    $(".header-menu-bar").addClass("d-block").removeClass("d-none")
  });
$(".close-icon").on("click",function(){
    $(".header-menu-bar").addClass("d-none").removeClass("d-block")
})

//--- Login------ 
$(".show-icon").on("click",function(){
    $('#password-input').attr('type', 'password');
    $(".hidden-icon").addClass("d-block").removeClass("d-none")
    $(".show-icon").addClass("d-none").removeClass("d-block")
})
$(".hidden-icon").on("click",function(){
    $('#password-input').attr('type', 'text');
    $(".show-icon").addClass("d-block").removeClass("d-none")
    $(".hidden-icon").addClass("d-none").removeClass("d-block")
})


// ------Register-------
$(".id-card-info").on("click", function(event) {
    event.stopPropagation(); 
    $(".id-cards").toggleClass("d-block d-none");
  });
  
  $(document).on("click", function(event) {
    if (!$(event.target).closest("#.id-card-info").length) {
      $(".id-cards").removeClass("d-block").addClass("d-none");
    }
  });
// -----Rates-----------
// herbiri kenara clickde remove olmalidi ???
$(".branch-delivery").on("click", function() {
    $(".branch-delivery").addClass("bg-orange")
});

$(".address-delivery").on("click", function() {
    $(".address-delivery").addClass("bg-orange")
});

$(".branch").on("click", function() {
    $(".branch").addClass("bg-dark")
});


// ----- Make-order ------
$("#delete-btn").on("click",function(){
    $(".new-form").addClass("d-none").removeClass("d-block")
})

$(".add-new-link").on("click",function(){
    $(".new-form").addClass("d-block").removeClass("d-none")
})
