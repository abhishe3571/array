
const input = document.querySelector('#name');
const btn = document.querySelector('#myButton');
const output = document.querySelector('#message');

// input.addEventListener('change', function(event) {
//     console.log(event.target.value);
// });

btn.addEventListener('click', function(){
    const text = input.value;
    output.innerHTML = "Hello, " + text;
});

// console.log('Hello world!');
