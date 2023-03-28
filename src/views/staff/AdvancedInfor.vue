<template>
  <!-- <el-scrollbar style="height:500px;width: 2000px">			
      <el-row  style="height: 600px;width: 2100px">  -->
  <el-table
    :data="tableData"
    style="width:100%;"
    height="90vh"

>
      <el-table-column
    fixed
      prop="name"
      label="姓名"
      width="120"
>
      </el-table-column>
      <el-table-column label="奖惩资料">
      <el-table-column
      prop="punishmentdate"
      label="奖惩日期"
      width="150">
      </el-table-column>
        <el-table-column
          prop="punishmentpoint"
          label="奖惩分数"
          width="120">
        </el-table-column>
        <el-table-column
          prop="punishmentreason"
          label="奖惩原因"
          width="300">
        </el-table-column>
      </el-table-column>
      <el-table-column label="培训资料">
      <el-table-column
      prop="trainingdate"
      label="培训日期"
      width="150">
      </el-table-column>
      <el-table-column
          prop="trainingcontent"
          label="培训内容"
          width="120">
      </el-table-column>
      </el-table-column>
      <el-table-column label="考评资料">
      <el-table-column
      prop="testdate"
      label="考评日期"
      width="150">
      </el-table-column>
        <el-table-column
          prop="testcontent"
          label="考评内容"
          width="120">
        </el-table-column>
        <el-table-column
          prop="testresult"
          label="考评结果"
          width="300">
        </el-table-column>
      </el-table-column>
      <el-table-column label="调薪资料">
      <el-table-column
      prop="adjustmentdate"
      label="调薪日期"
      width="150">
      </el-table-column>
        <el-table-column
          prop="beforeadjustment"
          label="调前薪资"
          width="120">
        </el-table-column>
        <el-table-column
          prop="afteradjustment"
          label="调后薪资"
          width="120">
        </el-table-column>
        <el-table-column
          prop="adjustmentreason"
          label="调薪原因"
          width="300">
        </el-table-column>
      </el-table-column>
      <el-table-column label="调动资料">
      <el-table-column
      prop="transferdate"
      label="调动日期"
      width="150">
      </el-table-column>
        <el-table-column
          prop="beforetransfer"
          label="调前部门"
          width="120">
        </el-table-column>
        <el-table-column
          prop="beforeposition"
          label="调前职位"
          width="120">
          <el-table-column
          prop="transferreason"
          label="调动原因"
          width="120">
        </el-table-column>
        <el-table-column
          prop="aftertransfer"
          label="调后部门"
          width="120">
        </el-table-column>
        <el-table-column
          prop="afterposition"
          label="调后职位"
          width="120">
        </el-table-column>
        <el-table-column
          prop="remarks1"
          label="备注"
          width="120">
        </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="工资信息">
      <el-table-column
      prop="salarymonth"
      label="工资日月份"
      width="150">
      </el-table-column>
        <el-table-column
          prop="acsetname"
          label="账套名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="Wagespayable"
          label="应发工资"
          width="120">
        </el-table-column>
        <el-table-column
          prop="remarks2"
          label="备注"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column label="其他信息">
      </el-table-column>
  </el-table>
      <!-- </el-row>
  </el-scrollbar> -->
</template>

<style lang="less" scoped>
/deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 8px; // 横向滚动条
    height: 8px; // 纵向滚动条 必写
}
/deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #dde;
    border-radius: 3px;
}

</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>