
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isPrime = (arrayNumber =>{
    let flag = true;
    if (arrayNumber === 1){
        flag = false;
    }
    if (arrayNumber > 1) {
        for (let i = 2; i < arrayNumber; i++) {
            if (arrayNumber % i === 0) {
                flag = false
            }
        }
    }
    return flag;
})
console.log(isPrime(arrayNumber))