$(document).ready(function(){
    $('body').scrollspy({
        target: ".scrollspy", 
        offset: 50
    });   
});
$(".navbar a").on('click', function(event){
  event.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 50
  }, 800, function(){
    window.location.hash = hash;
  });
});
