'use strict';

let array = [1,2,3,4,5,6];
let target = 13;

function bs(array: number[] , target: number ,s: number,e: number ): number{

  if ( s > e){
    return -1 ;
  }

  const m = Math.floor((s + e) / 2) ;
  
  if(array[m] === target){
    return m;
  }

  if(target > array[m]){
    return bs(array , target , m+1 , array.length - 1);
  }

  return bs (array , target , 0, m-1);

  



}

console.log(bs(array , target , 0 ,array.length - 1 ));
 
