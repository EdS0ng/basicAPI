'use strict';
//Character count
 
let stringObj = {};

stringObj.counts = (Str)=>{
  let numSpaces = Str.match(/\s/g).length;
  let numLet = Str.length-numSpaces;
  let numWords=Str.match(/[\w_-]+/gi).length;
  let obj = {"Letters": numLet,"Spaces":numSpaces,"Words":numWords};
  return obj;
};

module.exports=stringObj;
