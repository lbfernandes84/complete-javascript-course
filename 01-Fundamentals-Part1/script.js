// const value = 5;
// value = 3;

let notConstValue = 'value1';
console.log(notConstValue);
notConstValue = 'value2';
console.log(notConstValue);

{
    var test = 1;
    let testlet = 2;
}
console.log(test);

let x = 3;
let y = 2;
console.log('X:', x, 'Y:', y);
x, y = y, x;
console.log('X:', x, 'Y:', y);
