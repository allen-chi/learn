// console.log("hello world");

// pulls a node list of all .panel classes and stores into panels
const panels = document.querySelectorAll('.panel');

// function to add/remove the open and open-active subclasses
// trying to get it to also remove the subclasses when a different panel is selected
function toggleOpen() {
// check to see if the subclasses exist, and remove if they do
panelsArray.forEach(panel => {
    if (panel.classList.contains('open') && panel.classList.contains('open-active')) {
        panel.classList.remove('open');
        panel.classList.remove('open-active');
    }
      
// add subclasses to open the selected tab
    console.log('Hello');
    this.classList.add('open');
    this.classList.add('open-active');
    console.log(this.classList);

});
}

// takes the nodelist and converts it into an array
panelsArray = Array.from(panels);

// iterates through the array and runs toggleOpen on the panel that is clicked
    panelsArray.forEach(panel => {
        console.log(panel.classList);
        panel.classList.remove('open');
        panel.classList.remove('open-active');
    
        panel.addEventListener('click', toggleOpen);
    });

