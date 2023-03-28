import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import BascInfor from '../views/staff/BasicInfor'
import AdvancedInfor from '../views/staff/AdvancedInfor'
import EmployeePoint from '../views/count/EmployeePoint'
import InforStatistics from '../views/count/InforStatistics.vue'
import PersonInform from '../views/count/PersonInform.vue'
import PersonRecord from '../views/count/PersonRecord'
import AcSet from '../views/salary/AcSet'
import ACSetting from '../views/salary/ACSetting'
import MonthEnd from '../views/salary/MonthEnd'
import PayrollManage from '../views/salary/PayrollManage'
import PayrollQuery from '../views/salary/PayrollQuery'
import SalaryView from '../views/salary/SalaryView'
import BackupRecovery from '../views/system/BackupRecovery'
import BasicInformation from '../views/system/BasicInformation'
import InitializeData from '../views/system/InitializeData'
import OperationLog from '../views/system/OperationLog'
import SystemView from '../views/system/SystemView'
import OperatorManagement from '../views/system/OperatorManagement'
import EmployeeData from '../views/Hr/EmployeeData'
import EmployeePraise from '../views/Hr/EmployeePraise'
import EmployeeTrain from '../views/Hr/EmployeeTrain'
import EmployeeTransfer from '../views/Hr/EmployeeTransfer'
import rewardsPunishment from '../views/Hr/rewardsPunishment'
import SalaryAdjustment from '../views/Hr/SalaryAdjustment'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
     children:[
     {path: '/staff1',component:BascInfor},
     {path: '/staff2',component:AdvancedInfor},
     {path: '/count1',component:InforStatistics},
     {path: '/count2',component:EmployeePoint},
     {path: '/count3',component:PersonInform},
     {path: '/count4',component:PersonRecord},
     {path: '/salary1',component:AcSet},
     {path: '/salary2',component:ACSetting},
     {path: '/salary3',component:MonthEnd},
     {path: '/salary4',component:PayrollManage},
     {path: '/salary5',component:PayrollQuery},
     {path: '/salary6',component:SalaryView },
     {path: '/system1',component:BackupRecovery },
     {path: '/system2',component:BasicInformation },
     {path: '/system3',component:InitializeData },
     {path: '/system4',component:OperationLog},
     {path: '/system5',component:OperatorManagement },
     {path: '/system6',component:SystemView},
     {path: '/Hr1',component:EmployeeData},
     {path: '/Hr2',component:EmployeePraise},
     {path: '/Hr3',component:EmployeeTrain},
     {path: '/Hr4',component:EmployeeTransfer},
     {path: '/Hr5',component:rewardsPunishment},
     {path: '/Hr6',component:SalaryAdjustment},
     ]
    
  },
]

const router = new VueRouter({
  routes
})

export default router
