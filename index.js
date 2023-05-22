let display  = document.getElementById('screen');
let clearAll = (placeholder) => {
    display.value = '';
}
 let del = () => {
    display.value=display.value.slice(0, -1);
 }
let myFunction = (myFunction) => {
    display.value += myFunction;
}

let calcAnswer = () => {
    display.value = eval(display.value);
}
  
 