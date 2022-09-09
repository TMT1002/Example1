const personObject = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName    
    }
};

const thuyet = Object.create(personObject);

const tran = Object.create(personObject);

personObject.sayBye = function(){
  console.log('goodbye');
}

thuyet.sayBye();
tran.sayBye();