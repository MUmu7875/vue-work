import Mock from "mockjs";
// const Mock = require("mockjs");
let data = Mock.mock({
    "data|300": [ //生成300条数据 数组
        {
            "JobNo|+1": 1,//生成员工工号，自增1
            "EmployeeName": "@cname",//生成姓名
            "NewDate":'@now()',
            "Birthday":function(){
                const yearRange = [1980, 2004]
                let year = Math.floor(yearRange[0] + Math.random()*(yearRange[1]-yearRange[0]));
                let month = Math.floor(Math.random()*12.99); 
                let day = Math.floor(Math.random()*28.99); 
                if(month<10){
                    month = "0" + month
                }
                if(day<10){
                    day = "0" + day
                }
                return year + "-" + month + "-" + day     
            },//生成员工生日
            "age":function(){
                return this.NewDate.slice(0,4) - this.Birthday.slice(0,4)
            },//生成员工年龄
            "Telephone": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "Electron": '@email("@163.com")',//生成随机邮箱
            "EmployeeSex|1": ["男","女"],
            "nation|1": ["回族","汉族","蒙古族","满族","朝鲜族",],
            "Political|1": ["群众","团员","预备党员","党员"],
            "MaritalStatus|1": ["未婚","已婚"],
            "title|1": ["实习","助理","初级","中级","高级"],
            "position|1": ["前端","运营","运维","算法","后端"],
            "EmploymentForm|1": ["劳务合同","劳动合同"],
            "HighestDegree|1": ["大专","本科","硕士","博士"],
            "Major|1": ["数学","计算机","软件工程"],
            "EmploymentDate":'@date("yyyy-MM-dd")',
            "contractTerm":"@integer(1,3)",
        }
    ]
})
Mock.mock(/api\/staffDate/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return data
})
