function Student(name, age) {
    this.name = name;
    this.age = age;
}

var thuyet = new Student('Thuyet',22);

Student.prototype.sayHi = function(){
  console.log('Hello');
}

thuyet.sayHi();
