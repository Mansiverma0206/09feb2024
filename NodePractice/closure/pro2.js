// set =>collection of data . no duplicate data will be allow,
//map => property or value me data stoore hota h 
//mutable => jisme data change ho skta h use muteable bolte h Set/Map
//unmuteable => jisme data change nhi ho skta h use unmuteable bolte h

var ob1 = new Map()


ob1.set('abc',100);
ob1.set(true,321);

for(var k of ob1.keys())
console.log(ob1.get(k))

// var ob1 = new Set()
// ob1.add(21)
// ob1.add(22)
// ob1.add(23)
// ob1.add(24)
// ob1.add(25)
// ob1.add(21)
// console.log(ob1.size)
// console.log(ob1.has(25))
// console.log(ob1.delete(25))
// console.log(ob1.size)
// for(var x of ob1)
// {
//     console.log(x)
// }