let burgers = document.querySelectorAll('.menu__item');
for (let i = 0; i < burgers.length; i++) {
  burgers[i].onclick = function(){
    document.getElementById('menu__toggle').checked = false;
  };
}