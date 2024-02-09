// constructor model => data initizali krta h

function Student(roll,name,age)
{
 this.roll = roll
 this.name=name
 this.age=age
 this.show = function(){
    console.log(this.roll,this.name,this.age)
 }
}

function CSStudent(roll,name,age,subjects){
    Student.call(this,roll,name,age)
    this.subjects = subjects
    this.showCs = function(){
        console.log(this.subjects)
    }
}
CSStudent.prototype = new Student();

var ob1 = new CSStudent(101,"mohit",23,"java,c,c++")
ob1.show()
ob1.showCs()
// var ob1 = new Student(101,"vikas",23)
// console.log(ob1)




// function createObj(roll,name,age)
// {
//     var ob = {
//         roll:roll,
//         name:name,
//         age:age
//     }
//     return ob
// }

// var ob1 = createObj(101,"mohit",23)
// var ob2 = createObj(102,"aayushi",28)
// console.log(ob1)
// console.log(ob2)