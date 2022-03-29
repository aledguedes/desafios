function numPares(x, y) {
    for(let i = x; i <= y; i++){
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}
console.log(numPares(32, 40));