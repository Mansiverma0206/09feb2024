//basic,bonus,insentive,deduction,tax
//curring
var collectSalary = (basic)=>
{
         return (bonus, incentive)=>
         {
            return (deduction,tax)=>
            {
                var totalExtraAmt = bonus + incentive ;
                var totalDeduction = deduction + tax ;
                var salary = basic + totalExtraAmt - totalDeduction 
                return salary
            }
         }
}

var collectExtra = collectSalary(20000)
var collectDeduction = collectExtra(1200,400)
var z = collectDeduction(2500,4500)
console.log(z)


// var fun1 = (basic)=>
// {
//     return (bouns , incentive)=>
//     {
//         return (deduction,tax)=>
//         {
//              var totalExtraAmt = bouns + incentive ;
//              var totalDeduction = deduction + tax ;
//              var salary = basic + totalExtraAmt - totalDeduction ;
//              return salary 
//         }
//     }
// }
// var z = fun1(15000)(1200,300)(2500,4500)
// console.log(z)

// function calculate(basic,bonus,incentive,deduction,tax)
// {
//     var totalExtraAmt = bonus+incentive
//     var totalDeduction = deduction + tax ;
//     var salary = basic +  totalExtraAmt - totalDeduction 
//     return salary ;
// }
// var z = calculate(15000,1200,400,2500,4500)
// console.log(z)