<template>
  <div class="container">
    <el-row class="tac nav">
      
        <el-checkbox-group v-model="checkList">
          <el-checkbox checked="true" :label="item.label" v-for="item in tabledata.fields" :key="item"></el-checkbox>
        </el-checkbox-group>
      
    </el-row>
    <div class="table">
      <div class="tableHead">
        <div class="tableHeadText">数据列表</div>
        <el-button type="info">刷新</el-button>
        <el-button type="info">过滤</el-button>
        <el-button type="info">导出</el-button>
        <el-button type="primary">添加数据</el-button>
      </div>
      <el-table
        border
        style="width: 100%">
        <el-table-column
          fit="true"
          prop="name"
          :label="item.label"
          v-for="item in tabledata.fields"
          :key="item"
        >
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
      checkList: ['选中且禁用','复选框 A'],
      tabledata: {
        name: "test",
        fields: [
          {
            label: "姓名",
            type: "single_line_text"
          },
          {
            label: "原因",
            type: "paragraph_text"
          },
          {
            label: "性别",
            type: "single_choice",
            choices: [
              {
                name: "option",
                value: "男"
              },
              {
                name: "option",
                value: "女"
              }
            ]
          },
          {
            label: "年龄",
            type: "number"
          }
        ]
      }
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
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
.el-checkbox-group {
  font-size: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
}
.el-checkbox+.el-checkbox {
    margin-left: 0px;
    margin-top: 30px;
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
