const a =['EmployeeSex', 'age', 'nation', 'position', 'title', 'HighestDegree', 'EmploymentForm', 'contractTerm']
const b =['22', '', '', '运营', '助理', '', '劳务合同', '']  

// for(i=0;i<a.length;i++){
//     if(b[i].length > 0){
//         let c =a[i]+":"+b[i]
//         console.log(c);
//     }
// }
// console.log(Object.create(c));

// 方法1
let d = []
for(i=0;i<a.length;i++){
    if(b[i].length > 0){
        let e = {}
        e[a[i]] = b[i]
        d.push(e)   //键值赋值
        // console.log(d);
    }
}
console.log(d)

