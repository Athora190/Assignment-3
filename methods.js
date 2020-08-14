//method one .foreach()
let items = [1, 2, 3, 4, 5];
function forEach(items) {
  let num;
  for (let i = 0; i < items.length; i++) {
    num = items[i];
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

// function callback(element)
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

// function ElementSearch(element, index) {
//   if (element === index) {
//     return index;
//   } else {
//     return -1;
//   }
// }
function indexOf(arr, char) {
  let val;
  for (let i = 0; i < arr.length; i++) {
    val = arr[i];
    if (val == char) {
      return i;
    }
  }
  return -1;
}
console.log(indexOf(arr5, "done"));

//method eight .push()
let arr6 = [1, 2, 3, 4];
function push(arr, element) {
  // let end = arr.length - 1; // repesents the last index
  // let h = arr[end + 1]; // the value in array
  // return the array and added value  [1,2,3,4,3]
  arr[arr.length] = element;
  // arr[h] = element;
  return arr.length;
}
console.log(push(arr6, 3));
//method nine .lastIndexOf()
function lastIndexOf(arr, element) {
  let val;
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    val = arr[i];
    if (val == element) {
      return i;
    }
  }
}
console.log(lastIndexOf(arr6, 2));

//method ten Object.key()
let text = { d: "adg", f: "log" };
function ObjectKey(object) {
  let arr = [];
  for (let key in object) {
    arr.push(key);
  }
  return arr;
}
console.log(ObjectKey(text));

//method eleven object.value()
function objectvalue(object) {
  let arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
}
console.log(objectvalue(text));

//method tweleve .every()
let arr7 = [100, 43, 295, 111];
function isLessThen(value) {
  if (value < 100) {
    return true;
  } else {
    return false;
  }
}
function isGreaterThen(value) {
  if (value > 100) {
    return true;
  } else {
    return false;
  }
}

function Every(arr, func) {
  let result;
  let solution;
  for (let i = 0; i < arr.length; i++) {
    result = func(arr[i]);
  }
  return result;
}
console.log(Every(arr7, isGreaterThen));
