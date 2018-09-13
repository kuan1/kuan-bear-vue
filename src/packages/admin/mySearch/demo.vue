<template>
  <div>
    <my-search
      :data="searchData"
      :payload="payload"
      :search="fetchData"
      @reset="resetSearch"
    >
      <div class="item" slot-scope="{search}">
        <el-input @change="search($event, 'change')"></el-input>
      </div>
    </my-search>

    <my-table ></my-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        payload: {
          page: 1,
          per_page: 10
        },
        searchData: {
          name: '姓名',
          select: {
            type: 'select',
            label: '选择',
            options: [
              {value: 0, label: '选项1'},
              {value: 1, label: '选项2'}
            ]
          }
        }
      }
    },
    methods: {
      fetchData(e) {
        console.log(e)
      }
    }
  }
</script>
