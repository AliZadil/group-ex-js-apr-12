let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}


function doubleNumbers(arr){
  return arr.map(el => el * 2);
}

console.log(doubleNumbers(data));

function primeNumbers (arr){
  return arr.filter(isPrime).sort((a,b)=> a - b);
}

console.log(primeNumbers(data));

function converted(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newElement = {
      number: arr[i],
      isPrime: isPrime(arr[i])
    }
    result.push(newElement);     
  }
  return result;
}

console.log(converted(data));

function highestPrime(arr){
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i].number && isPrime(arr[i].number)){
      highest = arr[i].number;
    }
  }
  return highest;
}

console.log(highestPrime(converted(data)));

function lowHigh(arr){
  return arr.sort((a,b) => a.number - b.number);
}

console.log(lowHigh(converted(data)));

// high to low

function highLow(arr){
  return arr.sort((a,b) => b.number - a.number);
}

console.log(highLow(converted(data)));