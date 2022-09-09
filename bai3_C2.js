const personObject = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName;  
    }
};

const thuyet = Object.create(personObject);
thuyet.__proto__.sayBye = function(){
  console.log('goodbye');
}

const tran = Object.create(personObject);

thuyet.sayBye();
tran.sayBye();
