var bg = document.querySelector('.background');
var moon = document.querySelector('.moon');
var mountain = document.querySelector('.mountain');
var road = document.querySelector('.road');

document.addEventListener('scroll', function(){
    var value = window.scrollY;

     bg.style.top = value * 0.5 + 'px';
     moon.style.left = value * 0.5 + 'px';
     moon.style.top = value * 0.5 + 'px';
    
});
