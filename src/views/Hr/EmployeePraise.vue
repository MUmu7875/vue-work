<template>
  <div>
  <el-button type="primary"  @click="dialogVisible = true"><i aria-hidden="true"></i>高级搜索</el-button>
  <el-dialog
      title="高级搜索"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <span>
        <el-form :model="searchForm" :rules="rules" ref="searchForm" label-width="100px" class="demo-searchForm">
          <el-row>
          <el-col :span="7">
            <el-form-item label="年龄" prop="age">
              <el-input v-model="searchForm.age" size="mini" style="width: 2.5rem"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="民族" prop="nation">
              <el-input v-model="searchForm.nation" size="mini" style="width: 2.5rem"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
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
          <el-col :span="7">
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
          <el-col :span="7">
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
          <el-col :span="7">
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
          <el-col :span="7">
            <el-form-item label="聘用形式" prop="EmploymentForm">
            <el-select v-model="searchForm.EmploymentForm" placeholder="请选择形式"
            size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
              <el-option label="劳务合同" value="劳务合同"></el-option>
              <el-option label="劳动合同" value="劳动合同"></el-option>
            </el-select>
          </el-form-item>
          </el-col>
          <el-col :span="7">
          <el-form-item label="合同期限" prop="contractPeriod">
            <el-select v-model="searchForm.contractTerm" placeholder="请选择"
            size="mini" style="width: 2.5rem" prefix-icon="el-icon-edit">
              <el-option label="1" value="1" ></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
            </el-select>
          </el-form-item>
          </el-col>
          <el-col :span="7">
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
            <el-button type="primary" @click="submitSearch(' searchForm')">立即创建</el-button>
            <el-button @click="resetForm(' searchForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </span>
    </el-dialog>
</div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        searchForm: {
          EmployeeSex:'',
          age:'',
          nation:'',
          position:'',
          title:'',
          HighestDegree:'',
          EmploymentForm:'',
          EmploymentDate:'',
          contractTerm:'',
        },
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  };
</script> 