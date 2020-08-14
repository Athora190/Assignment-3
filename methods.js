//method one .foreach()
let items = [1, 2, 3, 4, 5];
function forEach(items) {
  for (let i = 0; i < items.length; i++) {
    let num = items[i];
    console.log(num);
  }
}
forEach(items);

//method two .map()
let arr1 = [1, 2, 3, 4, 5];
function x(element) {
  return element;
}
function doubleX(num) {
  return num * 2;
}
function sqarX(num) {
  return num * num;
}
function map(arr, func) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(func(arr[i]));
  }
  return newarr;
}
console.log(map(arr1, doubleX));

// method three .filter()
let arr2 = [1, 2, 3, 4, 5];

function greaterThen(x) {
  x = 4;
  if (x > arr2.length) {
    return true;
  } else {
    return false;
  }
}
function lessThen(num) {
  num = 7;
  if (num < arr2.length) {
    return true;
  } else {
    return false;
  }
}
function filter(arrF, func) {
  let newarr = [];
  if ((arr2 = !null)) {
    for (let i = 0; i < arrF.length; i++) {
      newarr.push(func(arrF[i]));
      return newarr;
    }
  }
}
console.log(filter(arr2, lessThen));

// method four .some()
let arr3 = [3, 6, 7, 2, 11];
//checks if even
function IsEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// checks is odd
function IsOdd(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function Some(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    //if ((arr = !null)) {
    if (func(arr[i])) {
      console.log("true", arr);
      return true;
    } else {
      console.log("false", arr);
    }
  }
  return false;
}

console.log(Some(arr3, IsOdd));

//method five .reduce()
let arr4 = [1, 2, 3, 4, 5];
// let foc;
// let sum;
// function Sum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     foc = arr[i];
//     sum = foc + arr[i + 1];
//   }
//   return sum;
// }
// console.log(Sum(arr4));
function rSum(accu, num) {
  return accu + num;
}
function rProduct(accu, num) {
  return accu * num;
}
function reduce(arr, func, init) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total = func(total, arr[i]);
  }
  // if(init === undefined)
  // {

  // }
  return total;
}
console.log(reduce(arr4, rSum));
//method six .includes()
let arr5 = ["bunny", "turtle", "fun"];
function ToFind(val, char) {
  if (val == char) {
    return true;
  } else {
    return false;
  }
}
function Includes(arr, func, x) {
  let found;
  for (let i = 0; i < arr.length; i++) {
    found = func(arr[i], x);
  }
  return found;
}
console.log(Includes(arr5, ToFind, "fun"));

//method seven .indexOf()

function ElementSearch(element, index) {
  if (element === index) {
    return index;
  } else {
    return -1;
  }
}
function indexOf(arr, func, char) {
  let val;
  for (let i = 0; i < arr.length; i++) {
    val = func(arr[i], char);
    return i;
  }
}
console.log(indexOf(arr5, ElementSearch, "bunny"));

//method eight .push()
arr6 = {};
function push(arr, element, length) {}
