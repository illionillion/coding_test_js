//メソッド呼び出しパターン
var myObject={
  value:10,
  show:function(){
    // console.log(this.show);
    console.log(this.value);
  }
}
console.log(myObject.value);
myObject.show();


//関数呼び出しパターン
function show(){
  console.log(this);
  this.value=1;
  this.index=0;
  // console.log(this);
}
show();

var myObject2={
  value:1,
  props:2,
  show2:function(){
    console.log(this.value);
  },
  test:function(){
    alert(this.props);
  },
  view:function(){
    var self=this;
    console.log(self.value);
    function view(){
      console.log(self.props);
    }
    view();
  }
  // show();
}
myObject2.show2();
myObject2.test();
myObject2.view();


//コンストラクタ呼び出しパターン
function MyObject(value){
  this.value=value;
  this.increment=function(){
    this.value++;
  };
}
var myObject3=new MyObject(0);
console.log(myObject3.value);//0

myObject3.increment();

console.log(myObject3.value);//1


var myObject4={
  value:1,
  show:function(){
    console.log(this.value);
  }
};
var yourObject={
  value:3
};

myObject4.show();//1

myObject4.show.apply(yourObject);//3
myObject4.show.call(yourObject);//3