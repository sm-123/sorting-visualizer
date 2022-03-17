const ARRAY_LENGTH = 100
const randomArray = []
for(let i = 0; i<ARRAY_LENGTH; i++) {
    randomArray.push(Math.random())
}

var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";


document.getElementById("bars").appendChild(div);

