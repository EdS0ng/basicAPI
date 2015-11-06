
'use strict';

let mathObj = {};

mathObj.cube = (num)=>{return num*num*num;};

mathObj.sum = (arr)=>{ return arr.reduce((a,b)=>{
  a = Number(a);
  b= Number(b);
  return a+b;
})};

mathObj.factorial = (num)=>{
  let x = num;
  while (x>1){
    num*=x-1;
    x-=1;
  }
  return num;
}

mathObj.cuberoot = (num)=> {
  return Math.pow(num,1/3);
}

module.exports = mathObj;