console.log('ram rahim');

let raman1=document.getElementById('box1');
let main_video=document.getElementById('main-palace-for-video');
let main_heading=document.getElementById('main-palace-for-title');
let raman2=document.getElementById('box2');
let rama=document.getElementsByClassName('videos');
for(let x of rama)
{
x.addEventListener('click', function(e){
  raman1.classList.add('tohide1');
  raman2.classList.remove('tohide2');
  
  main_video.src=x.children[0].src;
  main_heading.innerText=x.children[1].innerText;
})
}


let button = document.getElementById('btn');
let modalbg = document.querySelector('.modal-bg');
let modalclose = document.querySelector('.modal-close')

button.addEventListener('click', function () {
    modalbg.classList.add('bg-active');
})
modalclose.addEventListener('click', function () {
    modalbg.classList.remove('bg-active');
})