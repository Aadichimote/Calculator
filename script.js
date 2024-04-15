let display = document.getElementById("input_box");

let buttons = document.querySelectorAll(".button");
let button_array = Array.from(buttons);
let string = "";

button_array.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Del") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    }
    else if 
        (e.target.innerHTML === "AC"){
            string = '';
            display.value = string; 
        }
    else if 
        (e.target.innerHTML === "="){
         string =eval (string);   
         display.value = string; 
        }

    else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
