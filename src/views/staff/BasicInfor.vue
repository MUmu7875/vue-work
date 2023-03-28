<template>
  <div>
    <div class="formTable">
      <div class="flex-container">
        <el-input placeholder="请输入员工名进行搜索,按下回车进行搜索" prefix-icon="el-icon-search"
            style="width: 350px;margin-right: 10px"
            v-model="inputVal" 
            @keyup.enter.native="Search_table()"
            clearable
            @clear="Search_table()" 
            >
          </el-input>
          <el-button icon="el-icon-search" type="primary"  @click="Search_table()">
              搜索
          </el-button>
          <el-button type="primary"  @click="dialogVisible = true"><i aria-hidden="true"></i>高级搜索</el-button>
          <el-dialog
              title="高级搜索"
              :visible.sync="dialogVisible"
              width="60%">
              <span>
                <el-form :model="searchForm" :rules="rules1" ref="searchForm" label-width="100px" class="demo-searchForm">
                  <el-row>
                  <el-col :span="8">
                    <el-form-item label="年龄" prop="age">
                      <el-input v-model="searchForm.age" size="mini" style="width: 2.5rem"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="民族" prop="nation">
                      <el-input v-model="searchForm.nation" size="mini" style="width: 2.5rem"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="性别" prop="EmployeeSex">
                      <el-select v-model="searchForm.EmployeeSex" placeholder="请选择性别"
                      size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  </el-row>
                  <el-row>
                  <el-col :span="8">
                  <el-form-item label="政治面貌" prop="Political">
                      <el-select v-model="searchForm.Political" placeholder="请选择"
                      size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                        <el-option label="群众" value="群众"></el-option>
                        <el-option label="团员" value="团员"></el-option>
                        <el-option label="预备党员" value="预备党员"></el-option>
                        <el-option label="党员" value="党员"></el-option>
                      </el-select>
                    </el-form-item> 
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="职位" prop="position">
                    <el-select v-model="searchForm.position" placeholder="职位" size="mini" style="width: 2.5rem">
                      <el-option
                              v-for="item in position"
                              :key="item"
                              :label="item"
                              :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  <el-col :span="8">
                  <el-form-item label="职称" prop="title">
                    <el-select v-model="searchForm.title" placeholder="职称" size="mini" style="width: 2.5rem">
                      <el-option
                              v-for="item in title"
                              :key="item"
                              :label="item"
                              :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>  
                  </el-row>
                  <el-row>
                  <el-col :span="8">
                    <el-form-item label="聘用形式" prop="EmploymentForm">
                    <el-select v-model="searchForm.EmploymentForm" placeholder="请选择形式"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="劳务合同" value="劳务合同"></el-option>
                      <el-option label="劳动合同" value="劳动合同"></el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  <el-col :span="8">
                  <el-form-item label="合同期限" prop="contractPeriod">
                    <el-select v-model="searchForm.contractTerm" placeholder="请选择"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="1" value="1" ></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="最高学历" prop="HighestDegree">
                    <el-select v-model="searchForm.HighestDegree" placeholder="学历" size="mini"
                                                  style="width: 2.5rem;">
                        <el-option
                                v-for="item in HighestDegree"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  </el-row>
                  <el-form-item>
                    <el-button type="primary" @click="submitSearch('searchForm')">立即搜索</el-button>
                    <el-button @click="SearchForm('searchForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </span>
            </el-dialog>
          <el-button type="primary" @click="returnForm" style="margin-left: 10px">返回</el-button>
          <el-button class="addTable" type="primary" @click.native="adduser">新增</el-button>
        </div>
          <el-dialog title="新增员工" :visible.sync="dialogFormVisible" width="80%" v-el-drag-dialog>
              <span> 
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
                  <el-row>
                  <el-col :span="6">
                    <el-form-item label="姓名" prop="EmployeeName">
                      <el-input v-model="ruleForm.EmployeeName" size="mini" 
                      style="width: 2.5rem" prefix-icon="el-icon-edit"
                      placeholder="请输入姓名" ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                  <el-form-item label="性别" prop="EmployeeSex">
                    <el-select v-model="ruleForm.EmployeeSex" placeholder="请选择性别"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                    <el-option
                                v-for="item in EmployeeSex"
                                :key="item"
                                :label="item"
                                :value="item">
                    </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                  <el-col :span="6">
                    <el-form-item label="出生日期" prop="Birthday">
                        <el-date-picker 
                              type="date" 
                              placeholder="出生日期" 
                              v-model="ruleForm.Birthday"
                              value-format="yyyy-MM-dd" 
                              size="mini"
                              style="width: 2.5rem"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="政治面貌" prop="Political">
                    <el-select v-model="ruleForm.Political" placeholder="请选择"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="群众" value="群众"></el-option>
                      <el-option label="团员" value="团员"></el-option>
                      <el-option label="预备党员" value="预备党员"></el-option>
                      <el-option label="党员" value="党员"></el-option>
                    </el-select>
                  </el-form-item> 
                </el-col>  
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                    <el-form-item label="年龄" prop="age">
                      <el-input v-model="ruleForm.age" size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit"></el-input>
                    </el-form-item>
                  </el-col>
                    <el-col :span="6">
                    <el-form-item label="民族" prop="nation">
                      <el-input v-model="ruleForm.nation" size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="电子邮箱" prop="Electron">
                      <el-input size="mini" style="width: 2.5rem" prefix-icon="el-icon-message"
                      v-model="ruleForm.Electron" placeholder="请输入电子邮箱"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="联系电话" prop="Telephone">
                      <el-input size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit"
                      v-model="ruleForm.Telephone" placeholder="请输入电话"></el-input>
                    </el-form-item>
                  </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                      <el-form-item label="工号" prop="JobNo">
                      <el-input v-model="ruleForm.JobNo" size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit"></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="职位" prop="position">
                      <el-select v-model="ruleForm.position" placeholder="职位" size="mini" style="width: 2.5rem">
                        <el-option
                                v-for="item in position"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="6">
                    <el-form-item label="职称" prop="title">
                      <el-select v-model="ruleForm.title" placeholder="职称" size="mini" style="width: 2.5rem">
                        <el-option
                                v-for="item in title"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    </el-col>
                    <el-col :span="6">
                    <el-form-item label="婚姻状况" prop="MaritalStatus">
                    <el-select v-model="ruleForm.MaritalStatus" placeholder="请选择"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="未婚" value="未婚"></el-option>
                      <el-option label="已婚" value="已婚"></el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  </el-row>
                  <el-row>
                <el-col :span="6">
                  <el-form-item label="入职日期" prop="EmploymentDate">
                  <el-date-picker
                          v-model="ruleForm.EmploymentDate"
                          size="mini"
                          type="date"
                          value-format="yyyy-MM-dd"
                          style="width: 2.5rem;"
                          placeholder="入职日期">
                  </el-date-picker>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="聘用形式" prop="EmploymentForm">
                    <el-select v-model="ruleForm.EmploymentForm" placeholder="请选择形式"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="劳务合同" value="劳务合同"></el-option>
                      <el-option label="劳动合同" value="劳动合同"></el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  <el-col :span="6">
                  <el-form-item label="合同期限" prop="contractTerm">
                    <el-select v-model="ruleForm.contractTerm" placeholder="请选择"
                    size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
                      <el-option label="1" value="1" ></el-option>
                      <el-option label="2" value="2"></el-option>
                      <el-option label="3" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                  </el-row> 
                  <el-row>
                  <el-col :span="6">
                    <el-form-item label="最高学历" prop="HighestDegree">
                    <el-select v-model="ruleForm.HighestDegree" placeholder="学历" size="mini"
                                                  style="width: 2.5rem;">
                        <el-option
                                v-for="item in HighestDegree"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                  </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="所属专业" prop="Major">
                    <el-input size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit" v-model="ruleForm.Major"
                    placeholder="请输入专业"></el-input>
                  </el-form-item>
                  </el-col>
                  </el-row>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
                </el-form>
              </span>
          </el-dialog>
    </div>
    <div class="empTable">
      <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, currentPage*pageSize)"
      style = "width: 100%"
      height="90vh"
      >
      <el-table-column
        prop="JobNo"
        label="工号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="EmployeeName"
        label="姓名"
        width="70">
      </el-table-column>
      <el-table-column
        prop="EmployeeSex"
        label="性别"
        width="50">
      </el-table-column>
      <el-table-column
        prop="Birthday"
        label="出生日期"
        width="120">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="50">
      </el-table-column>
      <el-table-column
        prop="MaritalStatus"
        label="婚姻状况"
        width="100">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        width="100">
      </el-table-column>
      <el-table-column
        prop="Political"
        label="政治面貌"
        width="100">
      </el-table-column>
      <el-table-column
        prop="Electron"
        label="电子邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="Telephone"
        label="联系电话"
        width="150">
    </el-table-column>
      <el-table-column
        prop="position"
        label="职位"
        width="100">
      </el-table-column>
      <el-table-column
        prop="title"
        label="职称"
        width="50">
      </el-table-column>
      <el-table-column
        prop="EmploymentForm"
        label="聘用形式"
        width="100">
      </el-table-column>
      <el-table-column
        prop="Major"
        label="所属专业"
        width="100">
      </el-table-column>
      <el-table-column
        prop="EmploymentDate"
        label="入职日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="contractTerm"
        label="合同期限"
        width="50">
      </el-table-column>
      <el-table-column
        fixed="right"
        width="100"
        label="操作" >
        <template slot-scope="scope">
            <el-button @click="audit(scope.row)" style="padding: 3px" size="mini">编辑</el-button>
            <el-button @click="deleteEmp(scope.row)" style="padding: 3px" size="mini" type="danger">删除
            </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin-top:15px;">
        <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-size="pageSize" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="tableData.length">
        </el-pagination>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Fuse from 'fuse.js'
  export default {
    data() {
      return {
        inputVal:'',
        tableData: [],
        copyTable:[],
        modelType:0,//0表示新增弹窗 1表示编辑
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 10 ,// 每页的数据条数
        EmployeeSex:['男','女'],
        position:['运营','运维','前端','后端','算法','架构'],
        title:['实习','助理','初级','中级','高级','专家'],
        HighestDegree: ['博士','硕士', '本科', '大专', '高中', '初中', '小学', '其他'],
        // ruleForm: {
        //   EmployeeName:'闫依林',
        //   EmployeeSex:'女',
        //   Birthday:'2023-1-10',
        //   MaritalStatus:'已婚',
        //   age:'23',
        //   nation:'汉族',
        //   Political:'团员',
        //   Electron:'1713030296@qq.com',
        //   Telephone:'15649805473',
        //   position:'前端',
        //   title:'初级',
        //   EmploymentForm:'劳动合同',
        //   HighestDegree:'本科',
        //   Major:'数学',
        //   EmploymentDate:'2023-01-01',
        //   JobNo:'2',
        //   contractTerm:'3',
        // },
        ruleForm: {
          EmployeeName:'',
          EmployeeSex:'',
          Birthday:'',
          MaritalStatus:'',
          age:'',
          nation:'',
          Political:'',
          Electron:'',
          Telephone:'',
          position:'',
          title:'',
          EmploymentForm:'',
          HighestDegree:'',
          Major:'',
          EmploymentDate:'',
          JobNo:'',
          contractTerm:'',
        },
        dialogVisible: false,
        searchForm: {
          EmployeeSex:'',
          age:'',
          nation:'',
          position:'',
          Political:'',
          title:'',
          HighestDegree:'',
          EmploymentForm:'',
          contractTerm:'',
        },
        dialogFormVisible: false,
        rules1:{
          EmployeeSex:[{trigger: 'blur'}],
          age:   [],
          nation: [],
          Political: [],
          title: [],
          position: [],
          EmploymentForm: [],
          HighestDegree: [],
          contractTerm: [],
        },
        rules: {
          EmployeeName: [{required: true, message: '请输入用户名', trigger: 'blur'},{
            message:'姓名填写格式有误',
            pattern:/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/,
          }],
          Birthday: [{required: true, message: '请输入出生日期', trigger: 'blur'}],
          age:   [{required:true,message:'请输入年龄',trigger:'blur'}],
          MaritalStatus: [{required: true, message: '请输入婚姻状况', trigger: 'blur'}],
          nation: [{required: true, message: '请输入民族', trigger: 'blur'}],
          Political: [{required: true, message: '请输入政治面貌', trigger: 'blur'}],
          Electron: [{required: true, message: '请输入邮箱地址', trigger: 'blur'}, {
              type: 'email',
              message: '邮箱格式不正确',
              trigger: 'blur'
          }],
          Telephone: [{required: true, message: '请输入电话号码', trigger: 'blur'},],
          title: [{required: true, message: '请输入职称', trigger: 'blur'}],
          position: [{required: true, message: '请输入职位', trigger: 'blur'}],
          EmploymentForm: [{required: true, message: '请输入聘用形式', trigger: 'blur'}],
          HighestDegree: [{required: true, message: '请输入学历', trigger: 'blur'}],
          Major: [{required: true, message: '请输入专业', trigger: 'blur'}],
          EmploymentDate: [{required: true, message: '请输入入职日期', trigger: 'blur'}],
          JobNo: [{required: true, message: '请输入工号', trigger: 'blur'}],
          contractTerm: [{required: true, message: '请输入合同期限', trigger: 'blur'}],
                },
      }
    },
    methods: {
      adduser() {
      this.dialogFormVisible = true
    },
      a(){
          axios.post("http://localhost:8080/api/staffDate").then((res)=>{
            // console.log(res.data.data);
              this.tableData = res.data.data
              this.copyTable = res.data.data
        })
      },
        //每页条数改变时触发 选择一页显示多少行
      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.currentPage = 1;
          this.pageSize = val;
      },
      //当前页改变时触发 跳转其他页
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage = val;
      },
      submitForm() {
        this.dialogFormVisible = false;
        if(this.modelType ===0){
          this.tableData.unshift(this.ruleForm)
        }else{
          this.tableData.replace(row,this.ruleForm)
        }       
      }, 
      audit(row){
        this.dialogFormVisible = true;
        this.modelType=1
        console.log(row)
        this.ruleForm=row
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      SearchForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 搜索  
      Search_table(){   
        const searchList = [];
        let res = this.inputVal;
        if(this.inputVal.length !== 0){
          this.tableData.forEach(item =>{
          let arrName = item.EmployeeName
            if(arrName === res){
            searchList.push(item)
            this.tableData=searchList; 
            // console.log(this.copyTable,"3333");
            // console.log(this.tableData);
          }
        });
        }else{
          this.tableData=this.copyTable;
          // console.log(this.tableData,'1111' )
          // console.log(this.copyTable,'222' )
        }
          
      },
      submitSearch(){
        this.dialogVisible = false;
        const options = {
          includeScore: true,
          minMatchCharLength:2,
          keys:['EmployeeSex','age', 'nation','position','Political','title','HighestDegree','EmploymentForm','contractTerm']//关键词
        }
        const formKeys = Object.keys(this.searchForm)
        const formValues =Object.values(this.searchForm)
        let formAnswer1 =[]
        for(let i=0;i<formKeys.length;i++){
          if(formValues[i].length > 0){
              let formAnswer2 ={}
              formAnswer2[formKeys[i]] = formValues[i]
              formAnswer1.push(formAnswer2)
              // console.log(formAnswer1);
          }
        }
        const fuse = new Fuse(this.tableData,options)//创建new Fuse 传入参数tableData、options
        const result =fuse.search({
          $and:formAnswer1//调用search方法 使用$and运算符
        })
        let newResult = result.map(item=>{
          // 每一项的item
          return item.item
        })
        console.log(Object.values(result));
        console.log(newResult,'111');
        this.tableData=newResult
      },
      returnForm(){
        this.tableData=this.copyTable;
      }    
   },
    mounted () {
      this.a();
    },
  }
  
  </script>
  
  <style lang="less" scoped>
  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
      width: 8px; // 横向滚动条
      height: 8px; // 纵向滚动条 必写
  }
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
      background-color: #dde;
      border-radius: 3px;
  }
  // .searchTable{
  //   margin: 0;
  //   padding: 0;
  //   margin-right: 15rem;
  // }
  .empTable{
    text-align: center;
    .el-table-column{
      text-align: center;
    }
  }
  .flex-container {
    display: -webkit-flex;
    display: flex;
    .addTable{
      margin-left: 10rem;
    }
    .searchTest{
    padding-right: 20px;
    width: 200px !important;
    .el-input__inner{
      width: 120px;
    }
  }
}
  </style>