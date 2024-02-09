function showValue(a,b){
    console.log(this.roll,this.name,this.age)
    console.log(a,b)
}

var ob1 ={roll : 101, name : "mansi", age : 23}
var ob2 ={roll : 102, name : "monika", age : 20}
var ob3 ={roll : 103, name : "bhumika", age : 25}

showValue.call(ob1,22,11)
showValue.apply(ob1,[22,33])
var fun1 = showValue.bind(ob2,22,33)
fun1()
// showValue.call(ob2)
// showValue.call(ob3)

//call =>function ke sath use hota h
//apply => argument arry ke form me hone
//bind => bind krta h or nya function deta h