function myFunc(arg){
    console.log(`arg was => ${arg}`);
}
  
console.log("Wait 1 minute for next console.log()");
setTimeout(myFunc, 1 * 1000 * 60 , 'funky');
  