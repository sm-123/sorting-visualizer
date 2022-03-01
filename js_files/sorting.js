const myArray = []
for (let i = 0;i < 100; i++){
    myArray.push(i);
}

myArray = [];
for (let i = 0; i < 100; i++) {
    myArray.push(Math.floor(Math.random()*100));
}
console.log(myArray);