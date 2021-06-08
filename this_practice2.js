// 'use strict';

//thisとは…
//関数を呼び出すオブジェクトへのリンク

const test={
  name:'taro',
  getName:function(){
    console.log(this.name);
    return this.name;
  }
}

test.getName();//taro

const sayThis=function(){console.log(this);};
const obj={name:'tarochan'};
obj.sayThis=sayThis;
sayThis();
console.log(obj.name);
obj.sayThis();

console.log('%c [JavaScript]thisについて学ぼう','color:red;font-size:1.5em;');

let myObj={
  id:2,
  printId(){
    console.log(this.id);
  }
}
myObj.printId();

const sayFoo=function(){
  console.log(this['foo']);
}
foo='foo';
const mySecondObj={
  foo:'I am in the obj',
  sayFoo
}
sayFoo();
mySecondObj.sayFoo();
console.log(mySecondObj);


function MyObj(id){
  this.id=id;
}

MyObj.prototype.printId=function(id){
  console.log('%c '+this.id,'background-color:yellow;');
}

const newInstance=new MyObj(6);
const newInstance2=new MyObj(67);
newInstance.printId();
newInstance2.printId();
console.log('%c '+newInstance,'color:blue;');

//class