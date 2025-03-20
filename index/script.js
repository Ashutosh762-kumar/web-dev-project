var tl = gsap.timeline()
 
 tl.from(".loader h2",{
   x:40,
   opacity:0,
   stagger:0.3,
   duration:1,
 })
 tl.to(".loader",{
   opacity:0,
 })
 tl.to(".loader", {
   opacity: 0,
   onComplete: function() {
     document.querySelector('.loader').style.pointerEvents = 'none';
   }
 });
