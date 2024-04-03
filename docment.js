let inp = document.getElementById("inp");
let parg = document.createElement("p")
let btn = document.getElementById("btn")
let input = document.querySelector(".input")
let storedData = JSON.parse(localStorage.getItem('savedData')) || [];
let btn2 = document.getElementById("btn2")

// Load existing saved data
storedData.forEach(function(text) {
    let p = document.createElement('p');
    p.textContent = text;
    input.appendChild(p);
});

btn.addEventListener("click", function() {
    let inpu = inp.value.trim();

    if (inpu !== "") {
        parg.textContent = inpu;
        input.appendChild(parg);
        storedData.push(inpu);
        localStorage.setItem('savedData', JSON.stringify(storedData));
        inp.value = "";

    }
    
});
if(inp.value > 0){    
    btn2.style.display= "block";}
btn2.addEventListener("click", function() {
    storedData.pop(); // Remove the last element from the array
    localStorage.setItem('savedData', JSON.stringify(storedData));
    input.removeChild(input.lastElementChild);
    console.log(storedData);
})