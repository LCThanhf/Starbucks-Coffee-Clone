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

//additional fix for the menu
window.addEventListener('resize', function() {
   var width = window.innerWidth;
   var bar = document.getElementById('bar');
   var cross = document.getElementById('cross');
   var nav = document.querySelector('.nav');

   if (width >= 1024) {
       // Hide the menu if the screen width is 1024px or more
       bar.style.display = 'none';
       cross.style.display = 'none';
       nav.style.left = '100%';
   } else {
       // Show the menu if the screen width is less than 1024px
       bar.style.display = 'block';
       cross.style.display = 'block';
   }
});

window.addEventListener('resize', function() {
   var width = window.innerWidth;
   var bar = document.getElementById('bar');
   var cross = document.getElementById('cross');
   var nav = document.querySelector('.nav');

   if (width <= 1024) {
       // Hide the cross and show the menu bar if the screen width is 1024px or less
       cross.style.display = 'none';
       bar.style.display = 'block';
       nav.style.left = '100%';
   } else {
       // Hide both the cross and the menu bar if the screen width is more than 1024px
       cross.style.display = 'none';
       bar.style.display = 'none';
   }
});

bar.addEventListener('click', function() {
   // Open the menu
   nav.style.left = '22%';

   // Hide the menu bar and show the cross
   bar.style.display = 'none';
   cross.style.display = 'block';

   // Set cross position to fixed
   cross.style.position = 'fixed';
   //make the cross appear at the same position as the menu bar after opened the bar
   cross.style.top = '0';
   cross.style.right = '0';
   cross.style.margin = '30.5px';


   // Disable scrolling
   document.body.style.overflow = 'hidden';
   
});

cross.addEventListener('click', function() {
   // Close the menu
   nav.style.left = '100%';

   // Hide the cross and show the menu bar
   cross.style.display = 'none';
   bar.style.display = 'block';



   // Reset cross position to default
   cross.style.position = 'static';

   // Enable scrolling
   document.body.style.overflow = 'auto';
});

window.addEventListener('resize', function() {
    // Enable scrolling when the window width is greater than 768px
    if (window.innerWidth > 768) {
        document.body.style.overflow = 'auto';
    }
});
