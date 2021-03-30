
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
function playSound(e){
   const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   if(!audio) return;
   //console.log(e.keyCode);
   key.classList.add('playing');
   audio.currenTime=0;
   
   audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown",playSound);
