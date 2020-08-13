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
  console.log(num);
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
