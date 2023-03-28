<template>
  <div> 
      <el-container>
        <el-aside width="3.75rem">
          <comment-menu />
          </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
</el-container>
</div>
</template>

<style lang="less" scoped>
  .el-header{
  background-color:#5aacff;
  color: rgb(248, 245, 245);
}
.el-aside{
 background-color:#76b9fc;
 flex: 0 0 230px;
  width: 2.875rem;
  color: #333;
}
.el-main {
  background-color: rgb(255, 255, 255);
  color: #333;
  text-align: center;
  height: 100vh;
}
@media screen and (max-width: 980px) {
    .el-aside{
       display: none; 
    }
  }
// body > .el-container {
//   margin-bottom: .5rem;
// }
// .el-card, .el-main {
//   padding: 0px
// }

</style>
<script> 
import CommentMenu from '../components/CommentMenu.vue';
export default {
components: { CommentMenu },
  data(){
    return{
}
},

 
}



</script>
