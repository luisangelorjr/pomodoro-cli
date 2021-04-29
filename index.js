function myFunc(arg){
    console.log(`arg was => ${arg}`);
  }
  
  setTimeout(myFunc, 15 * 1000 * 60 , 'funky');
  