window.addEventListener('keydown', function(e) {
    // console.log(e.keyCode);
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     console.log(key);
     key.classList.toggle('playing');
     //console.log(audio)
     if(!audio) {

        return;
     }
     audio.currentTime = 0;
     audio.play();
    });


// I wrote this to remove the CSS after keypress, the way it was instructed was lengthier?
window.addEventListener('keyup', function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
    
});