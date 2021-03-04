$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Maestro", "Frontender Jr", "YouTuber", "Mercadólogo", "Freelancer","Apasionado por el turismo"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Maestro", "Frontend Jr", "YouTuber", "Mercadólogo", "Freelancer", "Apasionado por el turismo"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/**Contac Form**/

((document)=>{
   contac$form=d.querrySelector(".contact-form"),
   $loader=d.querrySelector(".contact-form-loader"),
   $response = d.querrySelector(".");
   cont ac$form = d.querrySelector(".");
   
   $form.addEventListener("submit",e=> {
       e.preventDefault();
       $loader.classList.remove("none");
       fetch("https://formsubmit/ajax/hksanchez25@gmail.com",{
        method:"Post",
        body:new FormData(e.target)
   })
   .then((res) => (res.ok?res.json():Promise.reject()))
   .then(json=>{
       console.log(json);
       location.hash = "#Gracias Por Los Comentarios";
       $form.reset();
   })
   .catch(Error=>{
       console.log(Error);
       let message = Error.statusText ║ "Ocurrió un error al enviar, intenta nueva mente"
       $response.querrySelector("h3").innerHTML= 'Error${$error.status}:${message}';
       $loader.classList.add("none");
     }).finally{()=>{
       $loader.classList.add("none");
       setTimeout(()=>{
        location.hash = "close";
       },3000);
     }};
    });
})(document);

