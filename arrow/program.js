'use strict';

console.log("ok");

//アロー関数

const materials=[
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium',
  'JavaScript'
]

console.log(materials.map(materials=>materials.length)); //map関数あんまり使わない

let log =materials=>{materials.map(materials=>materials.length)}

log(materials)