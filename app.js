//const, var, let
const bar = document.querySelector('#bar');
const cross = document.querySelector('#cross');
const nav = document.querySelector('.nav');

bar.addEventListener('click', () => {
   bar.style.display = 'none';
   cross.style.display = 'block';
   nav.style.left = '20%';
});

cross.addEventListener('click', () => {
   cross.style.display = 'none';
   bar.style.display = 'block';
   nav.style.left = '100%';
})

const arrow = document.querySelectorAll('.arrow');

//Array.foreach(fucntion)
arrow.forEach((e) => {
   e.addEventListener('click', () => {
      var footerlist = e.parentElement.nextElementSibling;
      footerlist.style.display = 'block';

   // if else statement
   if (e.classList.contains('temp')) {
      e.classList.remove('temp');
      footerlist.style.display = 'none';
      e.style.transform = 'rotate(0deg)';
   } else {
      e.classList.add('temp');
      footerlist.style.display = 'block';
      e.style.transform = 'rotate(180deg)';
   }
   })
})


bar.addEventListener('click', function() {
   // Open the menu
   nav.style.left = '22%';
   
   // Hide the menu bar and show the cross
   bar.style.display = 'none';
   cross.style.display = 'block';

   // Add the no-scroll class to the body
   document.body.classList.add('no-scroll');
});

cross.addEventListener('click', function() {
   // Close the menu
   nav.style.left = '100%';

   // Hide the cross and show the menu bar
   cross.style.display = 'none';
   bar.style.display = 'block';

   // Reset cross position to default
   cross.style.position = 'static';

   // Remove the no-scroll class from the body
   document.body.classList.remove('no-scroll');
});

//additional fix for the menu bar and cross
window.addEventListener('resize', function() {
   var width = window.innerWidth;
   var bar = document.getElementById('bar');
   var cross = document.getElementById('cross');
   var nav = document.querySelector('.nav');

   // Close the menu and enable scrolling
   nav.style.left = '100%';
   document.body.classList.remove('no-scroll');

   // Reset the display properties of the menu bar and the cross
   if (width < 1024) {
       bar.style.display = 'block';
       cross.style.display = 'none';
   } else {
       bar.style.display = 'none';
       cross.style.display = 'none';
   }
});

//DOM manipulation
const menuNav = document.querySelector('.menu-nav');
window.addEventListener('scroll', () => {
   if (window.pageYOffset > menuNav.offsetTop) {
      menuNav.classList.add('sticky');
   }
   else {
      menuNav.classList.remove('sticky');
   }
})

