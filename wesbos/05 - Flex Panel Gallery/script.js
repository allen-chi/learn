// console.log("hello world");

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
  this.classList.toggle('open-active');
}
function logSomething() {
    console.log("This is a test");
};

panelsArray = Array.from(panels);
panelsArray.forEach(panel => panel.addEventListener('click', toggleOpen));