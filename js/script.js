var link = document.querySelector('.mainblock__arrow');
link.addEventListener('click', scrollMain);

var link2 = document.querySelector('.mainblock__btn');
link2.addEventListener('click', scrollMain);


function scrollMain(e) {
   e.preventDefault();
   var container = this.closest('.mainblock');
   var style = window.getComputedStyle(container);
   window.scroll({
       top: style.height.replace(/[^0-9]/g, ''),
       behavior: 'smooth'
   });
}