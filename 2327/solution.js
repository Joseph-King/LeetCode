var peopleAwareOfSecret = function(n, delay, forget){
    let sum = 1;

    for(let i=0; i<n; i++){
        if(i === 0) continue;
        console.log(i);
        console.log(i%forget);
        console.log(i%delay);
        console.log('------')

        if(i%forget === 0){
            console.log('SUM--')
            sum--;
        }
        if(i%delay === 0){
            console.log('SUM++')
            sum++;
        }
        console.log(`SUM: ${sum}`)
        console.log('------')
    }

    return sum
}

console.log(`RESULT: ${peopleAwareOfSecret(6, 2, 4)}`);