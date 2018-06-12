<template>
  <div class="container">
    <el-row class="tac nav">
      <el-col :span="12">
        <h5>状态</h5>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="table">
      <div class="tableHead">
        <div class="tableHeadText">表单列表</div>
        <el-button type="info">信息按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
      <el-table
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="name"
          label="标题"
          fit="true">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          fit="true">
        </el-table-column>
        <el-table-column
          prop="number"
          label="数据量"
          sortable
          fit="true">
        </el-table-column>
        <el-table-column
          prop="newest"
          label="最新数据"
          sortable
          fit="true">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          sortable
          fit="true">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          fit="true">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.el-col-12 {
  width: 100%;
}
.nav {
  flex-basis: 20%;
}
.table {
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
}
.tableHead {
  display: flex;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}
.tableHeadText {
  flex-basis: 70%;
}
</style>
