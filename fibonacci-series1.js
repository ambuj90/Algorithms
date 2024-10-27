function fibonacciseries(n){
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);

    for(let i = 2; i < n; i++){
        let nextTerm = (a + b);
        console.log(nextTerm);
        a=b;
        b= nextTerm;
    }
};
console.log(fibonacciseries(100));