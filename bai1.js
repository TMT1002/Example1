Array.prototype.logger = function(title,message){
    console.log(title +': '+ message);
  }
  
  const arr1 =[];
  const arr2 =[1,3,5];
  arr1.logger('ERROR','loi cu phap');
  arr2.logger('ERR','loi');