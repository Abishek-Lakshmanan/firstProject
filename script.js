// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = '23';
// if (x === 23) console.log;

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1996));

// function reverse(s){
//     return s.split("").reverse().join("");
// }

// Problem


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp

// - How to compute max and min temperatures?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// - How  to ignor errors?
// - Find max value in temp array
// - Find min value in the temp
// -Substract min from ma (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([41, 7, 4, 21]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/* PROBLEM 2:
Function should now recieve 2 arrays of temps

1) Understanding the problem
- With 2 arrays, should, should we implement functionality twice? NO! Just merge two arrays

2) Breaking up into sub-problems
- How merge 2 arrays */
