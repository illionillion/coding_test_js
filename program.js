'use strict';
console.log('hello world');

//線形探索
function liner_search(){
  //検索する配列データ
  var a=[1,2,13,10,12,15,3,4,5,6,11,34,5];
  a=selection_sort(a);
  //検索する値
  var search_value=document.querySelector('#number').value;

  //「調べた値」と「探す値が」一致したとき、indexを保存する変数
  //初期値はエラー(-1)に設定
  var index=-1;

  //繰り返し処理
  for(let i=0;i<a.length;i++){
    //条件分岐「調べた値」と「探す値」が一致した時にindexを保存して処理終了
    if(a[i]==search_value){
      index=i;
      break;
    }
  }

  console.log(a[index]+'\n'+index+'番目');
}


//二分探索
function binary_search(){

  //検索するソート済みの配列データ
  var a=[1,2,3,4,4,6,5,7,8,90,19,20,23,55,77];
  a=bubble_sort(a);
  //探す値
  var search_value=document.querySelector('#number').value;
  // var search_value=7;

  //「調べた値」と「探す値」が一致した時、indexを保存する変数。
  //初期値エラー(-1)に設定
  var index=-1;

  //調べる左端を表す添え字
  var left=0;
  console.log('初期値left='+left);

  //調べる右端を表す添え字
  var right=a.length-1;
  console.log('初期値right='+right);

  //左端と右端にデータがある間は処理を繰り返す
  while(left<=right){

    //左右の真ん中を表す添え字
    var middle=Math.floor((left+right)/2);
    console.log(middle);

    //真ん中の値と探す値を比較する
    if(a[middle]==search_value){
      //一致した場合、変数に入れて処理終了
      index=middle;
      break;

    }else if(a[middle]<search_value){
      //探す値より小さい場合、左側にはもっと小さい値しかないので左端の真ん中の右に移動する
      left=middle+1;
      console.log('+');
    }else{
      //探す値より大きい場合、右側にはもっと大きい値しか入らないので右端の値を真ん中の値の左に移動する
      right=middle-1;
      console.log('-');
    }
  }

  console.log(a[index]+'\n'+index+'番目');
}


//バブルソート
// var array=[1,5,3,7,8,4,6,2,9];
function bubble_sort(array){
  //配列の要素数だけループ
  for(let i=0;i<array.length;i++){
    //配列の左側から比較していく
    for(let j=array.length;i<j;j--){
    // for(let j=1;j<array.length;j++){
      //右側の数より左側の数が大きい場合は入れ替える
      if(array[j]<array[j-1]){
        let tmp=array[j-1];
        array[j-1]=array[j];
        array[j]=tmp;
      }
    }
    // console.log(array);
  }

  console.log(array);
  return array;
}

//選択ソート
// var array=[1,3,2,5,4,7,6,9,8,11,10];

function selection_sort(array){
  for(let i=0;i<array.length;i++){
    //最小値を一番右の値と仮定  
    let min=array[i];
    
    //最小値の配列の添え字も保存
    let k=i;
  
    //配列の隣の位置から最後まで最小値との比較を繰り返す
    for(let j=i+1;j<array.length;j++){
      //最小値の方が大きかったら、その値が最小値になる
      if(min>array[j]){
        min=array[j];
        //最小値のある添え字も更新
        k=j;
      }
    }
    //現段階の最小値を仮保存
    let tmp=array[i];
    //実際の最小値を一番左へ
    array[i]=array[k];
    //現段階の最小値を交換
    array[k]=tmp;
  
  }
  
  console.log(array);
  return array;
}


//thisの練習
function test(){
  console.log(this);
  console.log(this['a']);
}
var obj = {"a":"A"};
obj.test = test;
obj.prop="aaaa";
obj.test();

var obj2={
  test2:function(){return this;},
  alert:function(msg){console.log(msg);},
  push:function(push){document.write(push);}
}
var test2=obj2.test2;
console.log(obj2);
obj2.test2().alert("hello wolrd");
obj2.test2().push("hello wolrd");
// test2().alert("hello");