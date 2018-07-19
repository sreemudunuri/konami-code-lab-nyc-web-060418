const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let idx = 0
  document.body.addEventListener('keydown', function(event){
    const key = event.key
    if (key === codes[idx]) {
      console.log(event.key)
      console.log(idx)
      idx ++

      if(idx === codes.length) {
        alert('You Won a puppy!')
        idx = 0
      }

    } else {
        idx = 0
    }
  })
};
