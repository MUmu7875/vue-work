<template>
    <el-col >
       <el-menu
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="rgb(0,0,0,0)"
        >
        <h1 class="title">人事管理系统</h1>
        <el-menu-item
        v-for="item in noChildren"
        @click.native="clickMenu(item)"
        :key="item.label" 
        :index="item.label">
            <template slot="title">
            <i :class='`el-icon-${item.icon}`'></i>
            <span slot="title">{{item.label}}</span>
            </template>
          </el-menu-item>
        <el-submenu 
        v-for="item in hasChildren"
        :key="item.label" 
        :index="item.label">
            <template slot="title">
            <i :class='`el-icon-${item.icon}`'></i>
            <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group 
            @click.native="clickMenu(subItem)"
            v-for="subItem in item.children" 
            :key="subItem.label"
            :index="subItem.label">
            <el-menu-item>{{subItem.label}}</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
       </el-menu>
    </el-col>
</template>
<script>
export default {
    data(){
        return{
            isCollapse: false,
            menuDate:[
            {
              label:'员工系统',
              icon:'user',
              children:[
              {
              path:'/staff1',
              label:'基本资料',
              //icon:'s-home',
              url:'staff/BascInfor',
            },
            {
              path:'/staff2',
              label:'高级资料',
              //icon:'s-home',
              url:'staff/AdvancedInfor',
            },
              ]
            },
            {
              label:'统计管理',
              icon:'edit-outline',
              children:[
              {
              path:'/count1',
              label:'综合信息统计',
              url:'count/InforStatistics',

            },
            {
              path:'/count2',
              label:'员工积分统计',
              url:'count/EmployeePoint',
            },
            {
              path:'/count3',
              label:'人事信息统计',
              url:'count/PersonInform',
            },
            {
              path:'/count4',
              label:'人事记录统计',
              url:'count/PersonRecord',
            },
              ]
            },
            {
              label:'工资管理',
              icon:'video-camera',
              children:[
              {
              path:'/salary1',
              label:'账套管理',
              url:'salary/AcSet',
            },
            {
              path:'/salary2',
              label:'账套设置',
              url:'salary/ACSetting',
            },
            {
              path:'/salary3',
              label:'月末处理',
              url:'salary/MonthEnd',
            },
            {
              path:'/salary4',
              label:'工资表管理',
              url:'salary/PayrollManage',
            },
            {
              path:'/salary5',
              label:'工资表查询',
              url:'salary/PayrollQuery',
            },
            {
              path:'/salary6',
              label:'工资管理',
              url:'salary/SalaryView',
            },

              ]
            },
            {
              label:'系统管理',
              icon:'s-tools',
              children:[
              {
              path:'/system1',
              label:'备份恢复数据',
              url:'system/BackupRecovery',
            },
            {
              path:'/system2',
              label:'基础信息设置',
              url:'system/BasicInformation',
            },
            {
              path:'/system3',
              label:'初始化数据库',
              url:'system/InitializeData',
            },
            {
              path:'/system4',
              label:'操作日志管理',
              url:'system/OperationLog',
            },
            {
              path:'/system5',
              label:'操作员管理',
              url:'system/OperatorManagement',
            },
            {
              path:'/system6',
              label:'系统管理',
              url:'system/SystemView',
            },
              ]
            },
            {
              label:'人事管理',
              icon:'star-off',
              children:[
              {
              path:'/Hr1',
              label:'员工资料',
              url:'Hr/EmployeeData',
            },
            {
              path:'/Hr2',
              label:'员工好评',
              url:'Hr/EmployeePraise',
            },
            {
              path:'/Hr3',
              label:'员工培训',
              url:'Hr/EmployeeTrain',
            },
            {
              path:'/Hr4',
              label:'员工调动',
              url:'Hr/EmployeeTransfer',
            },
            {
              path:'/Hr5',
              label:'员工奖惩',
              url:'Hr/rewardsPunishment',
            },
            {
              path:'/Hr6',
              label:'员工调薪',
              url:'Hr/SalaryAdjustment',
            },
              ]
            },
        ]
        };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },  
      clickMenu(item){
      this.$router.push(item.path)
      },
         

    },
    computed:{
      hasChildren(){
      return this.menuDate.filter(item => item.children)
      }, 
      noChildren(){
      return  this.menuDate.filter(item =>! item.children)
      },
      },
}
</script>
<style>
.title{
  margin-top: 1rem;
  font-size: .3125rem;
  margin-left: 0.15rem;
  font-family: "Microsoft YaHei";
}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 200px;
    margin-left: 0.25rem;
}
 .el-menu-item-group{
    height: 0.5rem;
    line-height: .5rem;
    min-width: 2.5rem;
    padding: 0rem 0.25rem 0.3rem;
    margin: 0rem; 
 }

.el-menu-item-group__title {
    padding: 0rem !important;
    line-height: normal;
    font-size: 12px;
}
::-webkit-scrollbar {
    width: 0;
    height: 0;
}

</style>
