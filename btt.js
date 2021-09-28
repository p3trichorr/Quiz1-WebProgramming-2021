const btt= document.querySelector('.up');

btt.addEventListener('click', function(){
    window.scrollTo({
     top: 0,
     behavior: "smooth"
   })
});