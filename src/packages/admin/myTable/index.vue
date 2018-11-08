<template>
  <div>
    <el-button type="primary" v-if="add" @click="add" style="margin-botton: 20px">添加</el-button>
    <el-table stripe :data="data">
      <el-table-column v-for="(item) in columns" :key="item.prop" v-bind="item">
        <template slot-scope="{row}">
          <slot :name="item.prop" v-bind="row">
            <span>{{row[item.prop]}}</span>
          </slot>
        </template>
      </el-table-column>
      <el-table-column v-if="actions.length || action" label="操作">
        <template slot-scope="{row}">
          <el-button v-for="item in actions" :key="item.name" :type="item.type" @click="item.action(row)">{{item.name}}</el-button>
          <slot v-bind="row" name="action"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      defualt() {
        return []
      }
    },
    columns: {
      type: Array,
      defualt() {
        return {}
      }
    },
    action: {
      type: Boolean,
      default: false
    },
    add: Function,
    edit: Function,
    remove: Function,
  },
  computed: {
    actions() {
      const actions = [{
        action: this.edit,
        name: '编辑',
        type: 'success'
      }, {
        action: this.remove,
        name: '删除',
        type: 'danger'
      }]
      return actions.filter(item => item.action)
    }
  }
}
</script>

<style>
</style>
