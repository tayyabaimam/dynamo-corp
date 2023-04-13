 $(document).ready(function(){
    let $btns = $('.button-group button');

    //for filtering upon clicking button
    $btns.click(function(e){

     $('.button-group button').removeClass('active');
     e.target.classList.add('active');

     let selector= $(e.target).attr('data-filter');
     $('.grid').isotope({
        filter:selector
     })

     return false;
   });

   //for picture popup
   $('.button-group #btn1').trigger('click');
   $('.test-popup-link').magnificPopup({
       type: 'image',
       gallery:{enabled:true}  
      });

   //for carousel
   $('.owl-carousel').owlCarousel({
   loop:true,
   autoplay: true,
   dots: true,
   responsive:{
      0:{
         items: 1
      },
      544:{
         items: 2
      }
   }
})

//sticky nav
let nav_offset_top =$('.header_area').height()+50;
function navbarFixed(){
   if($('.header_area').length){
      $(window).scroll(function(){
         let scroll= $(window).scrollTop();
         if(scroll >= nav_offset_top){
         $('.main-menu').addClass('navbar_fixed');
         }
         else{
            $('.main-menu').removeClass('navbar_fixed');

         }
      })
   }
}
navbarFixed();
 });