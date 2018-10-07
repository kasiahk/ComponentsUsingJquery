$(document).ready(() => {
  $('.accordion-contentone').show();
  $('.accordion-contenttwo').hide();
  $('.accordion-contentthree').hide();
 $('.accordion-toggleone').on('click', () => {
$('.accordion-contentone').slideToggle();
$('.accordion-contenttwo').slideUp();
$('.accordion-contentthree').slideUp();
  });
 $('.accordion-toggletwo').on('click', () => {
$('.accordion-contentone').slideUp();
$('.accordion-contenttwo').slideToggle();
$('.accordion-contentthree').slideUp();
  });
 $('.accordion-togglethree').on('click', () => {
$('.accordion-contentone').slideUp();
$('.accordion-contenttwo').slideUp();
$('.accordion-contentthree').slideToggle();
  });

 


// When the user clicks the button, open the modal 
$('#myBtn').on('click', () => {
    $('#myModal').css('display', 'block');
});

// When the user clicks on <span> (x), close the modal
$('.close').on('click', () => {
    $('#myModal').css('display', 'none');
});

$('.okBtn').on('click', () => {
    $('#myModal').css('display', 'none');
});
$('.clsBtn').on('click', () => {
    $('#myModal').css('display', 'block');
});


    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').on('click', () => {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').on('click', () => {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function(){
      this.classList.toggle('active');
    });


});