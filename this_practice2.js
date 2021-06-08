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
class MyClass{
  constructor(id){
   this.id=id;
  }

  printId(id){
    console.log(this.id);
  }

}
const newInstance3=new MyClass(674);
newInstance3.printId();
const num=300;
const outer={
  value:100,
  value2:num*3,
  func1:function(){
    console.log(this);
    console.log(this.value);
    let _that=this;
    const func2=function(){
      console.log(this);
      console.log(_that.value);

      const func3=function(){
        console.log(this);
        console.log(_that.value2);
      }();
    }();
  }
}

outer.func1();


const video={
  id:1,
  title:'abc',
  tags:['a','b','c','d'],
  play(){
    console.log(this);
    console.log(this.id);
    console.log(this.title);
  },
  showTags(){
    this.tags.forEach(function(tag){

      console.log(this.title,tag);

    },this);
  }
}

video.time_length=900;
video.stop=function(){
  console.log(this.time_length);
}

function Video(title){
  this.title=title;
  this.title2=title+'2';
  console.log(title);
  console.log(this);
}

video.play();
video.stop();
const v=new Video('a');
const v2=new Video(video.title);
video.showTags();