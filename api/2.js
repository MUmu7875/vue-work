// xiaolin = "let a = 1;let b = 2;let c = a+b; console.log(c)"  //这是个字符串
const a =['EmployeeSex', 'age', 'nation', 'position', 'title', 'HighestDegree', 'EmploymentForm', 'contractTerm']
const b =['22', '', '', '运营', '助理', '', '劳务合同', '']  


zidian = "let zd = {"

for(i=0;i<a.length;i++){
    if(b[i] != ''){
        zidian = zidian + "'" + a[i] + "'" + ": '" + b[i] + "', "
    }
    
}

zidian = zidian + "}"//let zd ={zidian + a[i] + ":'" + b[i] + "', "}
console.log(zidian)

eval(zidian)  //直接将字符串当作命执行
console.log(zd)

// eval('let a = [1,2,3]')  等价于  let a = [1,2,3]