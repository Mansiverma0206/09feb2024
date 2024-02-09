function showValue() {
    console.log(this.roll, this.name, this.age)
}

var ob1 = {
    roll: 101,
    name: "mansi",
    age: 22,
    show: showValue
}
var ob2 = {
    roll: 101,
    name: "mansi",
    age: 22,
    show:  showValue
}
var ob3 = {
    roll: 101,
    name: "mansi",
    age: 22,
    show:  showValue
}
var ob4 = {
    roll: 101,
    name: "mansi",
    age: 22,
    show:  showValue
}
ob1.show()
ob2.show()
ob3.show()
ob4.show()

// var ob1 = {
//     roll : 101,
//     name : "mansi",
//     age :22,
//     show : function(){
//         console.log(this.roll,this.name,this.age)
//     }
// }

// ob1.show()